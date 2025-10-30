import NavButtons from '@/components/NavButtons'
import { styles } from '@/styles/styles'
import { Text, View } from 'react-native'

export default function SettingsScreen() {
  return (
    <View style={styles.views.home.containers.page}>
      <View style={styles.views.home.containers.elements}>
        <Text style={styles.text.primary}>Settings in tabs, yo!</Text>
        <NavButtons />
      </View>
    </View>
  )
}
