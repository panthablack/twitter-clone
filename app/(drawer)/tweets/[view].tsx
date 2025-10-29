import NavButtons from '@/components/NavButtons'
import { styles } from '@/styles/styles'
import { useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

export default function ViewTweetScreen() {
  const params = useLocalSearchParams()

  return (
    <View style={styles.views.home.containers.page}>
      <View style={styles.views.home.containers.elements}>
        <Text style={styles.text.primary}>View tweet: {params.view || 'View not found'}!</Text>
        <NavButtons />
      </View>
    </View>
  )
}
