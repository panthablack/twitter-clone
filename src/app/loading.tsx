import { ActivityIndicator, View } from 'react-native'

export default function LoadingScreen() {
  return (
    <View className="flex flex-1 justify-center items-center">
      <ActivityIndicator size="large" />
    </View>
  )
}
