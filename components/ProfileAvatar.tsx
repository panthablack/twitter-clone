import { styles } from '@/styles/styles'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

export default function ProfileAvatar() {
  const params = useLocalSearchParams()
  const router = useRouter()

  const goToProfile = (id: string) => {
    router.navigate({
      pathname: '/profile',
      params: { id },
    })
  }

  return (
    <TouchableOpacity style={styles.utility.flexRow} onPress={() => goToProfile(String(params.id))}>
      <Image
        style={profileStyles.avatar}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />
    </TouchableOpacity>
  )
}

const profileStyles = StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
    marginRight: 8,
    borderRadius: 25,
  },
})
