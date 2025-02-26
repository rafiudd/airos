import { type TextareaHTMLAttributes } from 'react'
import { FormControl, FormFloating, FormGroup, FormLabel, FormText, type FormControlProps } from 'react-bootstrap'
import Feedback from 'react-bootstrap/esm/Feedback'
import { Controller, type FieldPath, type FieldValues, type PathValue } from 'react-hook-form'

import type { TextInputProps } from './types'

const TextAreaFormInput = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
  name,
  containerClass,
  control,
  helpText,
  floating,
  id,
  label,
  rows,
  noValidate,
  labelClass,
  combined,
  ...other
}: TextInputProps<TFieldValues> & FormControlProps & TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <Controller<TFieldValues, TName>
      name={name as TName}
      defaultValue={'' as PathValue<TFieldValues, TName>}
      control={control}
      render={({ field, fieldState }) =>
        combined ? (
          <FormControl as="textarea" rows={rows ?? 3} id={id ?? name} {...other} {...field} isInvalid={Boolean(fieldState.error?.message)} />
        ) : floating ? (
          <FormFloating className={`input-floating-label ${containerClass ?? ''}`}>
            <FormControl as="textarea" rows={rows ?? 3} id={id ?? name} {...other} {...field} isInvalid={Boolean(fieldState.error?.message)} />
            {label && (
              <label htmlFor={id ?? name} className={labelClass}>
                {label}
              </label>
            )}
            {helpText && <FormText id={`${id ?? name}-help`}>{helpText}</FormText>}
            {!noValidate && fieldState.error?.message && <Feedback type="invalid">{fieldState.error?.message}</Feedback>}
          </FormFloating>
        ) : (
          <FormGroup className={containerClass ?? ''}>
            {label && (
              <FormLabel htmlFor={id ?? name} className={labelClass}>
                {label}
              </FormLabel>
            )}
            <FormControl as="textarea" rows={rows ?? 3} id={id ?? name} {...other} {...field} isInvalid={Boolean(fieldState.error?.message)} />
            {helpText && <FormText id={`${id ?? name}-help`}>{helpText}</FormText>}
            {!noValidate && fieldState.error?.message && <Feedback type="invalid">{fieldState.error?.message}</Feedback>}
          </FormGroup>
        )
      }
    />
  )
}

export default TextAreaFormInput
