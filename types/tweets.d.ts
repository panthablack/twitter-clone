type Tweet = {
  id: string
  body: string
  user: User
  time: string
}

type TweetProps = { tweet: Tweet }

type TweetListProps = {
  tweets: Tweet[]
  scrollEnabled?: boolean
  refreshing?: boolean
  showFooter?: boolean
  onEndReached?: function
  onRefresh?: function
  onEndReachedThreshold?: number
}
