import TweetCard from '@/components/TweetCard'
import { FlatList, StyleSheet, View } from 'react-native'

export default function TweetList({
  scrollEnabled = true,
  tweets = [],
  refreshing = false,
  onRefresh = () => ({}),
}: TweetListProps) {
  return (
    <View style={pageStyles.container}>
      <FlatList
        scrollEnabled={scrollEnabled}
        data={tweets}
        renderItem={({ item: tweet }) => <TweetCard tweet={tweet} />}
        keyExtractor={(tweet: Tweet) => tweet.id}
        ItemSeparatorComponent={() => <View style={pageStyles.tweetSeparator}></View>}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
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
})
