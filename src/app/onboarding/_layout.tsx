import { Stack } from 'expo-router'
import React from 'react'

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Onboarding Start' }} />
      <Stack.Screen name="final" options={{ title: 'Onboarding End' }} />
    </Stack>
  )
}
