import TweetList from '@/components/TweetList'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useRouter } from 'expo-router'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Home() {
  const insets = useSafeAreaInsets()
  const router = useRouter()

  const goToCreateTweet = () => {
    router.navigate({
      pathname: '/tweets/create',
    })
  }

  return (
    <View style={pageStyles.container}>
      <TweetList />
      <TouchableOpacity
        style={[pageStyles.floatingButton, { bottom: insets.bottom + 20 }]}
        onPress={() => goToCreateTweet()}
      >
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingTop: 8,
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1d9bf1',
    position: 'absolute',
    right: 30,
  },
})
