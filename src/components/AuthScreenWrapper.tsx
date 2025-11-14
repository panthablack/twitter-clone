import React, { PropsWithChildren } from 'react'
import { View } from 'react-native'

export default function AuthScreenWrapper({ children }: PropsWithChildren) {
  return (
    <View className="justify-center flex-1 bg-twitter-blue p-4">
      <View className="flex flex-row w-full justify-center">
        <View className="justify-center w-2/3">{children}</View>
      </View>
    </View>
  )
}
