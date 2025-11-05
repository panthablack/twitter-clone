import TweetCard from '@/components/TweetCard'
import { FlatList, StyleSheet, View } from 'react-native'

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

export default function TweetList({ scrollEnabled = true }: { scrollEnabled?: boolean }) {
  return (
    <View style={pageStyles.container}>
      <FlatList
        scrollEnabled={scrollEnabled}
        data={FAKE_DATA}
        renderItem={({ item: tweet }) => <TweetCard tweet={tweet} />}
        keyExtractor={(tweet: Tweet) => tweet.id}
        ItemSeparatorComponent={() => <View style={pageStyles.tweetSeparator}></View>}
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
