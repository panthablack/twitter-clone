import { StyleSheet, ViewStyle } from 'react-native'

const page: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  paddingTop: 8,
}

const elements: ViewStyle = {
  flex: 1,
  justifyContent: 'space-evenly',
  alignItems: 'center',
}

const buttons: ViewStyle = {
  gap: 20,
  justifyContent: 'center',
  alignItems: 'center',
}

export const componentStyles = StyleSheet.create({
  page,
  elements,
  buttons,
})
