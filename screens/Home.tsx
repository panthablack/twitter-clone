import TweetList from '@/components/TweetList'
import { API_ROOT_URL } from '@/constants/networking'
import { api } from '@/utilities/api'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Home() {
  const insets = useSafeAreaInsets()
  const router = useRouter()
  const [tweets, setTweets] = useState([] as Tweet[])
  const [isLoading, setIsLoading] = useState(true as boolean)
  const [refreshing, setRefreshing] = useState(false as boolean)

  const fetchAllTweets = async () =>
    await api(`${API_ROOT_URL}/tweets`).then(res => {
      const mapped: Tweet[] = (res?.data || []).map((i: Record<string, any>) => ({
        id: i.id,
        body: i.body,
        user: {
          id: i.user.id,
          name: i.user.name,
          handle: i.user.handle,
          avatar_url: i.user.avatar_url,
        },
        time: i.created_at,
      }))
      setTweets(() => mapped)
    })

  const onRefresh = () => {
    setRefreshing(true)
    fetchAllTweets().finally(() => {
      setRefreshing(false)
    })
  }

  useEffect(() => {
    setIsLoading(true)
    fetchAllTweets().finally(() => {
      setIsLoading(false)
    })
  }, [])

  const goToCreateTweet = () => {
    router.navigate({
      pathname: '/tweets/create',
    })
  }

  return (
    <View style={pageStyles.container}>
      {!isLoading ? (
        <TweetList tweets={tweets} onRefresh={onRefresh} refreshing={refreshing} />
      ) : (
        <ActivityIndicator size="large" />
      )}
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
