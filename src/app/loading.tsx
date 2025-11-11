import { ActivityIndicator, Text, View } from 'react-native'

export default function LoadingScreen() {
  return (
    <View>
      <Text>LoadingScreen!</Text>
      <ActivityIndicator size="large" />
    </View>
  )
}
