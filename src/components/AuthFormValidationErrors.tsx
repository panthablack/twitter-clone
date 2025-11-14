import React from 'react'
import ValidationErrors from './ValidationErrors'

type AuthFormValidationErrorsProps = {
  name: string
}

export default function AuthFormValidationErrors({ name }: AuthFormValidationErrorsProps) {
  return <ValidationErrors name={name} textClassNames="text-red-800 font-semibold" />
}
