import { AppText } from '@//components/AppText'
import { Button } from '@//components/Button'
import { useAuthStore } from '@//store/authStore'
import React from 'react'
import { View } from 'react-native'

export default function OnboardingFinalScreen() {
  const authStore = useAuthStore()

  return (
    <View className="justify-center flex-1 p-4">
      <AppText center size="heading">
        Onboarding Final Screen
      </AppText>
      <Button title="Complete Onboarding" onPress={() => authStore.completeOnboarding()} />
    </View>
  )
}
