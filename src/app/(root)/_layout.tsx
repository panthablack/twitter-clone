import { useAuthStore } from '@//store/authStore'
import '@/styles/global.css'
import { Stack } from 'expo-router'
import React from 'react'

export default function DefaultLayout() {
  const authStore = useAuthStore()

  return (
    <Stack>
      <Stack.Protected guard={authStore.hasCompletedOnboarding}>
        <Stack.Protected guard={!!authStore.isAuthenticated()}>
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={!authStore.isAuthenticated()}>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack.Protected>
      <Stack.Protected guard={!authStore.hasCompletedOnboarding}>
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  )
}
