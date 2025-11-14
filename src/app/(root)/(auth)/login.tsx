import { Button } from '@//components/Button'
import { useAuthStore } from '@//store/authStore'
import AuthFormValidationErrors from '@/components/AuthFormValidationErrors'
import AuthScreenWrapper from '@/components/AuthScreenWrapper'
import { styles } from '@/styles/styles'
import AntDesign from '@expo/vector-icons/AntDesign'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

export default function LoginScreen() {
  const authStore = useAuthStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const showResetOnboardingButton = false

  return (
    <AuthScreenWrapper>
      <View className="flex-row justify-center p-2">
        <AntDesign name="twitter" size={64} color="white" />
      </View>

      <View className="flex-row justify-center p-2 mb-16">
        <Text className="text-center text-white font-bold text-3xl">Log In</Text>
      </View>

      <TextInput
        style={styles.forms.textInput}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        placeholderTextColor="#aaa"
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <AuthFormValidationErrors name="email" />

      <TextInput
        style={styles.forms.textInput}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        placeholderTextColor="#aaa"
        textContentType="password"
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <AuthFormValidationErrors name="password" />

      <Button
        isLoading={authStore.isLoading}
        title="Log In"
        onPress={() => authStore.logIn(email, password)}
      />

      <View className="flex items-center flex-row gap-2 justify-center p-4 mb-4 flex-wrap">
        <Text className="text-lg text-gray-200">{"Don't have an account?"}</Text>
        <Link asChild push href="/register">
          <Text className="text-xl text-green-400">Register here.</Text>
          {/* <Button title="Register" /> */}
        </Link>
      </View>

      {showResetOnboardingButton && (
        <Button title="Reset Onboarding" onPress={() => authStore.resetOnboarding()} />
      )}
    </AuthScreenWrapper>
  )
}
