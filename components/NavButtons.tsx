import { styles } from '@/styles/styles'
import { useRouter } from 'expo-router'
import { Button, View } from 'react-native'

export default function NavButtons() {
  const router = useRouter()

  return (
    <View style={styles.component.buttons}>
      <Button color="#efc0c0" title="Go Home" onPress={() => router.navigate('/')} />
      <Button
        color="#efc0c0"
        title="Create a New Tweet"
        onPress={() => router.navigate('/tweets/create')}
      />
      <Button color="#efc0c0" title="View a Tweet" onPress={() => router.navigate('/tweets/5')} />
    </View>
  )
}
