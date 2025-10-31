import { StyleSheet, TextStyle } from 'react-native'

export const primary: TextStyle = {
  color: '#efefef',
  fontSize: 60,
  fontWeight: 'bold',
}

export const handle: TextStyle = {
  color: '#777',
  fontSize: 12,
  flexShrink: 1,
}

export const username: TextStyle = {
  fontSize: 12,
  fontWeight: 'bold',
  color: '#222222',
  flexShrink: 1,
}

export const textStyles = StyleSheet.create({ primary, handle, username })
