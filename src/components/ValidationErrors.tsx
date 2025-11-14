import { useErrorStore } from '@/store/errorStore'
import React, { PropsWithChildren } from 'react'
import { View } from 'react-native'
import ValidationError from './ValidationError'

type ValidationErrorsProps = {
  name: string
  textClassNames?: string
} & PropsWithChildren

export default function ValidationErrors({ name, textClassNames }: ValidationErrorsProps) {
  const errorStore = useErrorStore()

  return (
    <View className="flex flex-row items-center mt-2 mb-4 justify-start flex-wrap">
      <View className="flex-1 flex-col items-start gap-2 justify-start flex-wrap">
        {errorStore.validationErrors[name] &&
          errorStore.validationErrors[name].map((e: string) => (
            <ValidationError key={name + e} error={e} textClassNames={textClassNames} />
          ))}
      </View>
    </View>
  )
}
