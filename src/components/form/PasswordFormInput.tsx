'use client'

import { useState, type InputHTMLAttributes } from 'react'
import { FormControl, FormFloating, FormGroup, FormLabel, FormText, type FormControlProps } from 'react-bootstrap'
import Feedback from 'react-bootstrap/esm/Feedback'
import { Controller, type FieldPath, type FieldValues, type PathValue } from 'react-hook-form'
import type { TextInputProps } from './types'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'

const PasswordFormInput = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
  name,
  containerClass,
  control,
  helpText,
  floating,
  id,
  label,
  noValidate,
  ...other
}: TextInputProps<TFieldValues> & FormControlProps & InputHTMLAttributes<HTMLInputElement>) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Controller<TFieldValues, TName>
      name={name as TName}
      defaultValue={'' as PathValue<TFieldValues, TName>}
      control={control}
      render={({ field, fieldState }) =>
        floating ? (
          <FormFloating className={`input-floating-label ${containerClass ?? ''}`}>
            <FormControl
              id={id ?? name}
              type={showPassword ? 'text' : 'password'}
              {...other}
              {...field}
              isInvalid={Boolean(fieldState.error?.message)}
            />
            {label && <label htmlFor={id ?? name}>{label}</label>}
            <span className="d-flex position-absolute top-50 end-0 translate-middle-y p-0 pe-2 me-2" onClick={() => setShowPassword(!showPassword)}>
              {!fieldState.error &&
                (showPassword ? <FaEyeSlash size={20} className="cursor-pointer" /> : <FaEye size={18} className="cursor-pointer" />)}
            </span>
            {helpText && <FormText id={`${id}-help`}>{helpText}</FormText>}
            {!noValidate && fieldState.error?.message && <Feedback type="invalid">{fieldState.error?.message}</Feedback>}
          </FormFloating>
        ) : (
          <FormGroup className={containerClass ?? ''}>
            {label && <FormLabel>{label}</FormLabel>}
            <div className="position-relative">
              <FormControl id={id} type={showPassword ? 'text' : 'password'} {...other} {...field} isInvalid={Boolean(fieldState.error?.message)} />
              {!noValidate && fieldState.error?.message && <Feedback type="invalid">{fieldState.error?.message}</Feedback>}
              <span className="d-flex position-absolute top-50 end-0 translate-middle-y p-0 pe-2 me-2" onClick={() => setShowPassword(!showPassword)}>
                {!fieldState.error &&
                  (showPassword ? <FaEyeSlash size={20} className="cursor-pointer" /> : <FaEye size={18} className="cursor-pointer" />)}
              </span>
            </div>
            {helpText && <FormText id={`${id}-help`}>{helpText}</FormText>}
          </FormGroup>
        )
      }
    />
  )
}

export default PasswordFormInput
