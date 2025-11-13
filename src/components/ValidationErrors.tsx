import { useErrorStore } from '@/store/errorStore'
import React, { PropsWithChildren } from 'react'
import { View } from 'react-native'
import ValidationError from './ValidationError'

type ValidationErrorsProps = {
  name: string
} & PropsWithChildren

export default function ValidationErrors({ name }: ValidationErrorsProps) {
  const errorStore = useErrorStore()

  return (
    <View className="flex flex-row items-center mt-2 mb-4 justify-start">
      {errorStore.validationErrors[name] &&
        errorStore.validationErrors[name].map((e: string) => (
          <ValidationError key={name + e} error={e} />
        ))}
    </View>
  )
}
