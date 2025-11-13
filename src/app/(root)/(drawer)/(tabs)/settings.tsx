import { AppText } from '@//components/AppText'
import OpenModalButton from '@//components/OpenModalButton'
import React from 'react'
import { View } from 'react-native'

export default function SettingsScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center size="heading">
        Settings Screen
      </AppText>
      <OpenModalButton />
    </View>
  )
}
