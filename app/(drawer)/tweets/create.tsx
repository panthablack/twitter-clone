import ProfileAvatar from '@/components/ProfileAvatar'
import { FAKE_AUTH_USER } from '@/constants/fakeData'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function CreateTweetScreen() {
  const [newTweet, setNewTweet] = useState('')

  const [authUser] = useState({ ...FAKE_AUTH_USER })

  return (
    <View style={pageStyles.container}>
      <View style={formStyles.container}>
        <View style={inputStyles.container}>
          <ProfileAvatar user={authUser} />
          <TextInput
            multiline={true}
            onChangeText={setNewTweet}
            value={newTweet}
            placeholder="What's happening?"
            placeholderTextColor="gray"
            style={inputStyles.textarea}
            maxLength={280}
          />
        </View>
        <View style={footerStyles.container}>
          <Text style={pageStyles.charsRemainingtext}>
            Characters remaining: {280 - newTweet.length}
          </Text>
          <TouchableOpacity style={createButtonStyles.container} onPress={() => alert(newTweet)}>
            <Text style={createButtonStyles.text}>Tweet</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  charsRemainingtext: {
    color: 'gray',
  },
})

const formStyles = StyleSheet.create({
  container: {
    gap: 20,
    padding: 12,
  },
})

const inputStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 20,
    padding: 12,
  },
  textarea: {
    flex: 1,
    fontSize: 18,
    lineHeight: 22,
    padding: 10,
  },
})

const footerStyles = StyleSheet.create({
  container: {
    gap: 4,
    padding: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

const createButtonStyles = StyleSheet.create({
  container: {
    backgroundColor: '#1d9bf1',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
})
