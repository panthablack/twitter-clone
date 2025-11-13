import { useBootStore } from '@//store/bootStore'
import '@/styles/index.css'
import { Stack } from 'expo-router'
import React, { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function RootLayout() {
  const bootStore = useBootStore()

  useEffect(() => {
    useBootStore.getState().onBoot()
  }, [])

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
