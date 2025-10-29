import { ImageStyle, TextStyle, ViewStyle } from 'react-native'

export type NestedStyles = NestedViewStyles | NestedTextStyles | NestedImageStyles

export type NestedViewStyles = RecursiveObject<ViewStyle> | NestedViewStyles

export type NestedTextStyles = RecursiveObject<TextStyle> | NestedTextStyles

export type NestedImageStyles = RecursiveObject<ImageStyle> | NestedImageStyles
