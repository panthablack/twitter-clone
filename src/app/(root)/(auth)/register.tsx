import { AppText } from '@//components/AppText'
import OpenModalButton from '@//components/OpenModalButton'
import { useAuthStore } from '@//store/authStore'
import { Button } from '@/components/Button'
import React from 'react'
import { View } from 'react-native'

export default function RegisterScreen() {
  const authStore = useAuthStore()

  return (
    <View className="justify-center flex-1 p-4">
      <AppText center size="heading">
        Register Screen
      </AppText>
      <Button title="Register" onPress={() => authStore.register('person@people.com', 'secret')} />
      <OpenModalButton />
    </View>
  )
}
