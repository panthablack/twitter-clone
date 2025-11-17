import TweetCard from '@//components/TweetCard'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'

export default function TweetList({
  scrollEnabled = true,
  tweets = [],
  refreshing = false,
  showFooter = false,
  onRefresh = () => ({}),
  onEndReached = () => ({}),
  onEndReachedThreshold = 0,
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
        onEndReached={onEndReached}
        onEndReachedThreshold={onEndReachedThreshold}
        ListFooterComponent={() =>
          showFooter ? (
            <View style={{ paddingVertical: 20, marginBottom: 40 }}>
              <ActivityIndicator size="large" />
            </View>
          ) : (
            <></>
          )
        }
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
