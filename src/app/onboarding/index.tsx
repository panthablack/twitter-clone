import { AppText } from '@//components/AppText'
import { Button } from '@//components/Button'
import { Link } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

export default function OnboardingLandingScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center size="heading">
        Onboarding Landing Screen
      </AppText>
      <Link asChild push href="/onboarding/final">
        <Button title="Next" />
      </Link>
    </View>
  )
}
