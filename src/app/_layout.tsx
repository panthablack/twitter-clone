import { useAuthStore } from '@//store/authStore'
import { useBootStore } from '@//store/bootStore'
import '@/styles/global.css'
import { Stack } from 'expo-router'
import React, { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function RootLayout() {
  const authStore = useAuthStore()
  const bootStore = useBootStore()

  useEffect(() => {
    // authStore.logOut()
    bootStore.setIsLoading(false)
  }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Protected guard={bootStore.isLoading}>
          <Stack.Screen name="loading" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={!bootStore.isLoading}>
          <Stack.Protected guard={authStore.hasCompletedOnboarding}>
            <Stack.Protected guard={!!authStore.authUser}>
              <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
            </Stack.Protected>
            <Stack.Protected guard={!authStore.authUser}>
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            </Stack.Protected>
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          </Stack.Protected>
          <Stack.Protected guard={!authStore.hasCompletedOnboarding}>
            <Stack.Screen name="onboarding" options={{ headerShown: false }} />
          </Stack.Protected>
        </Stack.Protected>
      </Stack>
    </GestureHandlerRootView>
  )
}
