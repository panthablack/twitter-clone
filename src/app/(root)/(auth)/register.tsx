import { Button } from '@//components/Button'
import { useAuthStore } from '@//store/authStore'
import AuthFormValidationErrors from '@/components/AuthFormValidationErrors'
import AuthScreenWrapper from '@/components/AuthScreenWrapper'
import { styles } from '@/styles/styles'
import AntDesign from '@expo/vector-icons/AntDesign'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

export default function RegisterScreen() {
  const authStore = useAuthStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setFullName] = useState('')
  const [handle, setHandle] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  return (
    <AuthScreenWrapper>
      <View className="flex-row justify-center p-2">
        <AntDesign name="twitter" size={64} color="white" />
      </View>

      <View className="flex-row justify-center p-2 mb-16">
        <Text className="text-center text-white font-bold text-3xl">Register</Text>
      </View>

      <TextInput
        style={styles.forms.textInput}
        onChangeText={setFullName}
        value={name}
        placeholder="Full Name"
        placeholderTextColor="#aaa"
        autoCapitalize="none"
      />
      <AuthFormValidationErrors name="name" />

      <TextInput
        style={styles.forms.textInput}
        onChangeText={setHandle}
        value={handle}
        placeholder="Handle"
        placeholderTextColor="#aaa"
        autoCapitalize="none"
      />
      <AuthFormValidationErrors name="handle" />

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

      <TextInput
        style={styles.forms.textInput}
        onChangeText={setPasswordConfirmation}
        value={passwordConfirmation}
        placeholder="Password"
        placeholderTextColor="#aaa"
        textContentType="password"
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <AuthFormValidationErrors name="password_confirmation" />

      <Button
        isLoading={authStore.isLoading}
        title="Register"
        onPress={() => authStore.register({ name, email, handle, password, passwordConfirmation })}
      />

      <View className="flex items-center flex-row gap-2 justify-center p-4 mb-4">
        <Text className="text-lg text-gray-200">{'Already have an account?'}</Text>
        <Link asChild push href="/login">
          <Text className="text-xl text-green-400">Log in.</Text>
          {/* <Button title="Register" /> */}
        </Link>
      </View>
    </AuthScreenWrapper>
  )
}
