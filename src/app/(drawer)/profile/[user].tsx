import UserProfile from '@/components/UserProfile'
import { useLocalSearchParams } from 'expo-router'

export default function ProfileScreen() {
  const params = useLocalSearchParams()

  return <UserProfile userId={String(params.user)} />
}
