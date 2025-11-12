import { styles } from '@//styles/styles'
import { useRouter } from 'expo-router'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

type AvatarProps = {
  user: User
}

export default function ProfileAvatar({ user }: AvatarProps) {
  const router = useRouter()

  const goToProfile = (id: string) => {
    router.navigate({
      pathname: '/profile/[user]',
      params: { user: id },
    })
  }

  return (
    <TouchableOpacity style={styles.utility.flexRow} onPress={() => goToProfile(String(user.id))}>
      <Image style={profileStyles.avatar} source={{ uri: user.avatar_url }} />
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
