import NavButtons from '@/components/NavButtons'
import { styles } from '@/styles/styles'
import { useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

export default function ViewTweetScreen() {
  const params = useLocalSearchParams()

  return (
    <View style={styles.component.page}>
      <View style={styles.component.elements}>
        <Text style={styles.text.primary}>View tweet: {params.view || 'View not found'}!</Text>
        <NavButtons />
      </View>
    </View>
  )
}
