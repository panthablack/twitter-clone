import NavButtons from '@/components/NavButtons'
import { styles } from '@/styles/styles'
import { Text, View } from 'react-native'

export default function Dashboard() {
  return (
    <View style={styles.views.home.containers.page}>
      <View style={styles.views.home.containers.elements}>
        <Text style={styles.text.primary}>Hello, Joe!</Text>
        <NavButtons />
      </View>
    </View>
  )
}
