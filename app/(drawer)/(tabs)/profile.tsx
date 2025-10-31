import { styles } from '@/styles/styles'
import Entypo from '@expo/vector-icons/Entypo'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function ProfileScreen() {
  return (
    <View style={pageStyles.container}>
      <Image style={pageStyles.bgImage} source={require('@/assets/photos/hill-photo.jpg')} />
      <View style={profileStyles.container}>
        <TouchableOpacity style={styles.utility.flexRow}>
          <Image
            style={profileStyles.avatar}
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          />
          <View>
            <Text style={styles.text.username}>James Randall</Text>
            <Text style={styles.text.handle}>@panthablack</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    gap: 10,
  },
  bgImage: {
    height: 120,
    width: '100%',
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
