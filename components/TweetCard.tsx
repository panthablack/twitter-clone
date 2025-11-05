import { styles } from '@/styles/styles'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import { format, parseISO } from 'date-fns'
import { useRouter } from 'expo-router'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ProfileAvatar from './ProfileAvatar'

export default function TweetCard({ tweet }: TweetProps) {
  const router = useRouter()

  const getHumanReadableDate = (date: string) => format(parseISO(date), 'MMMM d, yyyy h:mm a')

  const goToTweet = (id: string) => {
    router.navigate({
      pathname: '/tweets/[view]',
      params: { view: id },
    })
  }

  return (
    <View style={tweetCardStyles.container}>
      <ProfileAvatar user={tweet.user} />
      <View style={tweetCardStyles.wrapper}>
        <TouchableOpacity style={{ ...styles.utility.flexRow, ...tweetCardStyles.headerContainer }}>
          <Text numberOfLines={1} style={styles.text.username}>
            {tweet.user.name}
          </Text>
          <Text numberOfLines={1} style={styles.text.handle}>
            @{tweet.user.handle}
          </Text>
          <Text numberOfLines={1} style={tweetCardStyles.dot}>
            &middot;
          </Text>
          <Text numberOfLines={1} style={tweetCardStyles.time}>
            {getHumanReadableDate(tweet.time)}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={tweetContentStyles.container} onPress={() => goToTweet(tweet.id)}>
          <Text style={tweetContentStyles.text}>{tweet.body}</Text>
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
