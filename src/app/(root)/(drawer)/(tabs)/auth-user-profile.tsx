import UserProfile from '@/components/UserProfile'
import { useAuthStore } from '@/store/authStore'
import React from 'react'

export default function AuthUserProfileScreen() {
  const authStore = useAuthStore()
  return <UserProfile userId={String(authStore.authUser?.id)} />
}
