import TweetList from '@/components/TweetList'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function ProfileScreen() {
  return (
    <View style={pageStyles.container}>
      <ScrollView>
        <Image style={pageStyles.bgImage} source={require('@/assets/photos/hill-photo.jpg')} />
        <View style={profileStyles.avatarContainer}>
          <Image
            style={profileStyles.avatar}
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          />
          <TouchableOpacity style={profileStyles.followButton}>
            <Text style={profileStyles.followButtonText}>Follow</Text>
          </TouchableOpacity>
        </View>
        <View style={profileStyles.nameContainer}>
          <Text style={profileStyles.username}>James Randall</Text>
          <Text style={profileStyles.handle}>@panthablack</Text>
        </View>
        <View style={profileStyles.descriptionContainer}>
          <Text style={profileStyles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nemo aperiam fugiat magni
            delectus nesciunt soluta. Reprehenderit repellat dolore nemo velit illo iusto,
            perspiciatis, facere porro quisquam, suscipit laborum. Cupiditate!
          </Text>
        </View>
        <View style={profileStyles.locationContainer}>
          <EvilIcons name="location" size={24} color="gray" />
          <Text style={profileStyles.locationText}>Melbourne, Australia</Text>
        </View>
        <View style={profileStyles.linkContainer}>
          <TouchableOpacity
            style={profileStyles.linkItem}
            onPress={() => Linking.openURL('https://manmachineltd.com')}
          >
            <EvilIcons name="link" size={24} color="gray" />
            <Text style={profileStyles.hyperlinkText}>ManMachine</Text>
          </TouchableOpacity>
          <View style={profileStyles.linkItem}>
            <EvilIcons name="calendar" size={24} color="gray" />
            <Text style={profileStyles.linkText}>Joined April 2011</Text>
          </View>
        </View>
        <View style={followerStyles.wrapper}>
          <View style={followerStyles.container}>
            <Text style={followerStyles.count}>989</Text>
            <Text style={followerStyles.text}>Following</Text>
          </View>
          <View style={followerStyles.container}>
            <Text style={followerStyles.count}>2,864</Text>
            <Text style={followerStyles.text}>Followers</Text>
          </View>
        </View>
        <View style={pageStyles.separator} />
        <TweetList scrollEnabled={false} />
      </ScrollView>
    </View>
  )
}

const followerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    fontWeight: 'bold',
  },
  text: {
    marginLeft: 4,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 12,
    gap: 12,
  },
})

const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  bgImage: {
    height: 120,
    width: '100%',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
})

const profileStyles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginTop: -28,
  },
  avatar: {
    height: 80,
    width: 80,
    marginRight: 8,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#fff',
  },
  descriptionContainer: {
    paddingHorizontal: 12,
    paddingVertical: 2,
    marginTop: 8,
  },
  description: {
    lineHeight: 22,
  },
  followButton: {
    backgroundColor: '#0f1418',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
  },
  followButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  handle: {
    color: '#777',
    fontSize: 12,
    marginTop: 1,
  },
  locationContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginTop: 12,
  },
  locationText: {
    color: 'gray',
  },
  linkContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginTop: 4,
  },
  linkItem: {
    flexDirection: 'row',
  },
  linkText: {
    color: 'gray',
  },
  hyperlinkText: {
    color: '#1d9bf1',
  },
  nameContainer: {
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '222',
  },
})
