import NavButtons from '@/components/NavButtons'
import { styles } from '@/styles/styles'
import { Text, View } from 'react-native'

export default function SettingsScreen() {
  return (
    <View style={styles.component.page}>
      <View style={styles.component.elements}>
        <Text style={styles.text.primary}>Settings in tabs, yo!</Text>
        <NavButtons />
      </View>
    </View>
  )
}
