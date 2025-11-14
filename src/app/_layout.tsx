import { useBootStore } from '@//store/bootStore'
import { useErrorStore } from '@/store/errorStore'
import '@/styles/index.css'
import { Stack, useNavigationContainerRef } from 'expo-router'
import React, { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function RootLayout() {
  const bootStore = useBootStore()
  const navigationRef = useNavigationContainerRef()

  useEffect(() => {
    useBootStore.getState().onBoot()
  }, [])

  useEffect(() => {
    if (bootStore.hasBooted && navigationRef) {
      const listener = navigationRef.addListener('state', () => {
        if (process.env.EXPO_PUBLIC_VERBOSE_DEBUGGING === 'true')
          console.debug('Route changed:', navigationRef.getCurrentRoute())
        useErrorStore.getState().resetValidationErrors()
      })

      return listener
    }
  }, [navigationRef, bootStore.hasBooted])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Protected guard={bootStore.isLoading}>
          <Stack.Screen name="loading" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={!bootStore.isLoading}>
          <Stack.Screen name="(root)" options={{ headerShown: false }} />
        </Stack.Protected>
      </Stack>
    </GestureHandlerRootView>
  )
}
