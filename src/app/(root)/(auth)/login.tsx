import { AppText } from '@//components/AppText'
import { Button } from '@//components/Button'
import { useAuthStore } from '@//store/authStore'
import ValidationErrors from '@/components/ValidationErrors'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { TextInput, View } from 'react-native'

export default function LoginScreen() {
  const authStore = useAuthStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View className="justify-center flex-1 p-4">
      <AppText center size="heading">
        Login Screen
      </AppText>
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        placeholderTextColor="gray"
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <ValidationErrors name="email" />

      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        placeholderTextColor="gray"
        textContentType="password"
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <ValidationErrors name="password" />

      <Button
        isLoading={authStore.isLoading}
        title="Log In"
        onPress={() => authStore.logIn(email, password)}
      />
      <Button title="Reset Onboarding" onPress={() => authStore.resetOnboarding()} />
      <Link asChild push href="/register">
        <Button title="Register" />
      </Link>
    </View>
  )
}
