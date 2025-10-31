import { styles } from '@/styles/styles'
import AntDesign from '@expo/vector-icons/AntDesign'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import { useRouter } from 'expo-router'
import { FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type Tweet = {
  id: string
  name: string
  handle: string
  time: string
}

const FAKE_DATA: Tweet[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'First Item',
    handle: '@panthablack',
    time: '9m',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Item',
    handle: '@panthablack',
    time: '4h',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    handle: '@panthablack',
    time: '2d',
  },
]

type TweetProps = { tweet: Tweet }

const TweetCard = ({ tweet }: TweetProps) => {
  const router = useRouter()

  const goToProfile = (id: string) => {
    router.navigate({
      pathname: '/profile',
      params: { id },
    })
  }

  const goToTweet = (id: string) => {
    router.navigate({
      pathname: '/tweets/[view]',
      params: { view: id },
    })
  }

  return (
    <View style={tweetCardStyles.container}>
      <TouchableOpacity onPress={() => goToProfile(tweet.id)}>
        <Image
          style={tweetCardStyles.avatar}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
      </TouchableOpacity>
      <View style={tweetCardStyles.wrapper}>
        <TouchableOpacity style={{ ...styles.utility.flexRow, ...tweetCardStyles.headerContainer }}>
          <Text numberOfLines={1} style={styles.text.username}>
            {tweet.name}
          </Text>
          <Text numberOfLines={1} style={styles.text.handle}>
            {tweet.handle}
          </Text>
          <Text numberOfLines={1} style={tweetCardStyles.dot}>
            &middot;
          </Text>
          <Text numberOfLines={1} style={tweetCardStyles.time}>
            {tweet.time}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={tweetContentStyles.container} onPress={() => goToTweet(tweet.id)}>
          <Text style={tweetContentStyles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas adipisci dignissimos
            laboriosam. Dolorem exercitationem et delectus voluptates, possimus beatae provident.
            Doloremque excepturi ducimus perferendis quia, corrupti repudiandae consectetur illo
            ratione.
          </Text>
        </TouchableOpacity>
        <View style={tweetEngagementStyles.container}>
          <TouchableOpacity style={tweetEngagementStyles.commentWrapper}>
            <EvilIcons name="comment" size={24} color="gray" />
            <Text style={tweetEngagementStyles.numComments}>482</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tweetEngagementStyles.retweetWrapper}>
            <EvilIcons name="retweet" size={24} color="gray" />
            <Text style={tweetEngagementStyles.numRetweets}>1952</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tweetEngagementStyles.heartsWrapper}>
            <EvilIcons name="heart" size={24} color="gray" />
            <Text style={tweetEngagementStyles.numHearts}>20609</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tweetEngagementStyles.shareWrapper}>
            <EvilIcons
              name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

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
      <FlatList
        data={FAKE_DATA}
        renderItem={({ item: tweet }) => <TweetCard tweet={tweet} />}
        keyExtractor={(tweet: Tweet) => tweet.id}
        ItemSeparatorComponent={() => <View style={pageStyles.tweetSeparator}></View>}
      />
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
  tweetSeparator: {
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1,
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

const tweetContentStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 4,
  },
  text: {
    lineHeight: 20,
  },
})

const tweetEngagementStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'center',
    marginTop: 4,
  },
  commentWrapper: {
    flexDirection: 'row',
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  numComments: {
    color: 'gray',
  },
  retweetWrapper: {
    flexDirection: 'row',
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  numRetweets: {
    color: 'gray',
  },
  heartsWrapper: {
    flexDirection: 'row',
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  numHearts: {
    color: 'gray',
  },
  shareWrapper: {
    flexDirection: 'row',
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})

const tweetCardStyles = StyleSheet.create({
  avatar: {
    height: 42,
    width: 42,
    marginHorizontal: 8,
    borderRadius: 21,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  dot: {
    fontSize: 12,
    flexShrink: 1,
  },
  time: {
    fontSize: 12,
    flexShrink: 1,
  },
})
