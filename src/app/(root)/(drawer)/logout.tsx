import { AppText } from '@//components/AppText'
import { useAuthStore } from '@//store/authStore'
import React, { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'

export default function LoginScreen() {
  const authStore = useAuthStore()

  useEffect(() => {
    authStore.logOut()
  }, [])

  return (
    <View className="justify-center flex-1 p-4">
      <AppText center size="heading">
        Logging Out
      </AppText>
      <ActivityIndicator size="large" />
    </View>
  )
}
