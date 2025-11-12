import { AppText } from '@//components/AppText'
import { Button } from '@//components/Button'
import OpenModalButton from '@//components/OpenModalButton'
import { useAuthStore } from '@//store/authStore'
import { Link } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

export default function LoginScreen() {
  const authStore = useAuthStore()

  return (
    <View className="justify-center flex-1 p-4">
      <AppText center size="heading">
        Login Screen
      </AppText>
      <Button title="Log In" onPress={() => authStore.logIn('person@people.com', 'secret')} />
      <OpenModalButton />
      <Button title="Reset Onboarding" onPress={() => authStore.resetOnboarding()} />
      <Link asChild push href="/register">
        <Button title="Register" />
      </Link>
    </View>
  )
}
