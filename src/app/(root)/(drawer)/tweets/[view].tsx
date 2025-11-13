import ProfileAvatar from '@//components/ProfileAvatar'
import { styles } from '@//styles/styles'
import { useApi } from '@/hooks/useApi'
import Entypo from '@expo/vector-icons/Entypo'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import { format } from 'date-fns'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { ActivityIndicator, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function ViewTweetScreen() {
  const params = useLocalSearchParams()
  const router = useRouter()
  const { api } = useApi()

  const [tweet, setTweet] = useState(null as Tweet | null)
  const [isLoading, setIsLoading] = useState(true as boolean)

  const goToProfile = (id: string) => {
    router.navigate({
      pathname: '/profile/[user]',
      params: { user: id },
    })
  }

  useEffect(() => {
    setIsLoading(true)
    api(`/tweets/${params.view}`)
      .then(res => {
        setTweet({
          ...(res?.data || {}),
          time: res?.data.created_at,
        })
      })
      .finally(() => setIsLoading(false))
  }, [params.view, api])

  return (
    <View style={pageStyles.container}>
      {isLoading ? (
        <View style={{ padding: 40 }}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        ''
      )}
      {tweet ? (
        <View>
          <View style={profileStyles.container}>
            <View style={styles.utility.flexRow}>
              <ProfileAvatar user={tweet?.user} />
              <TouchableOpacity
                style={styles.utility.flexRow}
                onPress={() => goToProfile(String(tweet.user.id))}
              >
                <View>
                  <Text style={styles.text.username}>{tweet.user.name}</Text>
                  <Text style={styles.text.handle}>@{tweet.user.handle}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Entypo name="dots-three-vertical" size={24} color="gray" />
            </TouchableOpacity>
          </View>
          <View style={tweetStyles.container}>
            <Text style={tweetStyles.text}>{tweet.body}</Text>
            <View style={timestampStyles.container}>
              <Text style={timestampStyles.text}>{format(tweet.time, 'h:mm a')}</Text>
              <Text style={timestampStyles.text}>&middot;</Text>
              <Text style={timestampStyles.text}>{format(tweet.time, 'd MMM.yy')}</Text>
              <Text style={timestampStyles.text}>&middot;</Text>
              <Text style={timestampStyles.linkText}>
                Twitter for {Platform.OS === 'ios' ? 'iPhone' : 'Android'}
              </Text>
            </View>
          </View>
          <View style={tweetStatsStyles.container}>
            <View style={tweetStatsStyles.innerContainer}>
              <Text style={tweetStatsStyles.statValue}>42689</Text>
              <Text style={tweetStatsStyles.statName}>Retweets</Text>
            </View>
            <View style={tweetStatsStyles.innerContainer}>
              <Text style={tweetStatsStyles.statValue}>849</Text>
              <Text style={tweetStatsStyles.statName}>Quote Tweets</Text>
            </View>
            <View style={tweetStatsStyles.innerContainer}>
              <Text style={tweetStatsStyles.statValue}>2744</Text>
              <Text style={tweetStatsStyles.statName}>Likes</Text>
            </View>
          </View>
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
          <View style={commentsStyles.container}>
            <Text>Comments:</Text>
          </View>
        </View>
      ) : (
        ''
      )}
    </View>
  )
}

const commentsStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 10,
    padding: 10,
    paddingHorizontal: 12,
  },
})

const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    gap: 10,
  },
})

const profileStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 12,
  },
  avatar: {
    height: 50,
    width: 50,
    marginRight: 8,
    borderRadius: 25,
  },
})

const tweetEngagementStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-around',
    alignContent: 'flex-start',
    alignItems: 'center',
    marginTop: 4,
    paddingHorizontal: 12,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
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

const tweetStatsStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'center',
    marginTop: 4,
    paddingHorizontal: 12,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  innerContainer: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'flex-start',
  },
  statName: {
    color: 'gray',
  },
  statValue: {
    fontWeight: 'bold',
    color: '#222',
  },
})

const tweetStyles = StyleSheet.create({
  text: {
    color: '#222',
  },
  container: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
})

const timestampStyles = StyleSheet.create({
  text: {
    color: '#222',
  },
  container: {
    gap: 4,
    flexDirection: 'row',
    paddingTop: 8,
  },
  linkText: {
    color: '#1d9bf1',
  },
})
