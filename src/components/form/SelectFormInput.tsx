import { type SelectHTMLAttributes } from 'react'
import { FormGroup, FormLabel, FormSelect, FormText, type FormSelectProps } from 'react-bootstrap'
import Feedback from 'react-bootstrap/esm/Feedback'
import { Controller, type FieldPath, type FieldValues, type PathValue } from 'react-hook-form'
import type { TextInputProps } from './types'

const SelectFormInput = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
  name,
  containerClass,
  children,
  control,
  helpText,
  id,
  label,
  noValidate,
  ...other
}: TextInputProps<TFieldValues> & FormSelectProps & SelectHTMLAttributes<HTMLSelectElement>) => {
  return (
    <Controller<TFieldValues, TName>
      name={name as TName}
      defaultValue={'' as PathValue<TFieldValues, TName>}
      control={control}
      render={({ field, fieldState }) => (
        <FormGroup className={containerClass ?? ''}>
          {label && <FormLabel htmlFor={id ?? name}>{label}</FormLabel>}
          <FormSelect id={id ?? name} {...other} {...field} isInvalid={Boolean(fieldState.error?.message)}>
            {children}
          </FormSelect>
          {helpText && (
            <FormText id={`${name}-help`} muted>
              {helpText}
            </FormText>
          )}
          {!noValidate && fieldState.error?.message && <Feedback type="invalid">{fieldState.error?.message}</Feedback>}
        </FormGroup>
      )}
    />
  )
}

export default SelectFormInput
