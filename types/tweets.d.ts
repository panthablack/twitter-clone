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
}
