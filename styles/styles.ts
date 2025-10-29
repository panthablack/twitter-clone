import { images } from '@/styles/images/images'
import { text } from '@/styles/text/text'
import { views } from '@/styles/views/views'
import { NestedStyles } from '@/types/styles'
import { StyleSheet } from 'react-native'

const rawStyles: NestedStyles = {
  images,
  text,
  views,
}

export const styles = StyleSheet.create(rawStyles)
