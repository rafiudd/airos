import type { ReactNode } from 'react'
import { type Control, type FieldPath, type FieldValues } from 'react-hook-form'

export type TextInputProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
  control: Control<TFieldValues>
  name: TName
  id?: string
  containerClass?: string
  label?: string | ReactNode
  helpText?: string
  floating?: boolean
  placeholder?: string
  noValidate?: boolean
  combined?: boolean
  labelClass?: string
}
