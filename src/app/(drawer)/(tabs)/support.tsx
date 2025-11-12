import { AppText } from '@//components/AppText'
import OpenModalButton from '@//components/OpenModalButton'
import React from 'react'
import { View } from 'react-native'

export default function SupportScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center size="heading">
        Support Screen
      </AppText>
      <OpenModalButton />
    </View>
  )
}
