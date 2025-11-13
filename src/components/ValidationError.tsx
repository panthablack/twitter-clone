import React, { PropsWithChildren } from 'react'
import { Text } from 'react-native'

type ValidationErrorProps = {
  error: string
} & PropsWithChildren

export default function ValidationError({ error }: ValidationErrorProps) {
  return <Text className="font-semibold text-red-600">{error}</Text>
}
