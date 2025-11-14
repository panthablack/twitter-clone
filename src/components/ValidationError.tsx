import React, { PropsWithChildren } from 'react'
import { Text } from 'react-native'

type ValidationErrorProps = {
  error: string
  textClassNames?: string
} & PropsWithChildren

export default function ValidationError({ error, textClassNames }: ValidationErrorProps) {
  return <Text className={textClassNames || 'font-semibold text-red-600'}>{error}</Text>
}
