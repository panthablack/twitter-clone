import { NestedViewStyles } from '@/types/styles'
import { ViewStyle } from 'react-native'

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

export const home: NestedViewStyles = {
  containers: {
    page,
    elements,
    buttons,
  },
}

// type IAmStrictlyTyped = {
//   name: string
//   description: string
//   fruit: boolean
// }

// type NestedType =
//   | IAmStrictlyTyped
//   | Record<string, IAmStrictlyTyped>
//   | Record<string, IAmStrictlyTyped | Record<string, IAmStrictlyTyped>>
//   | Record<
//       string,
//       | IAmStrictlyTyped
//       | Record<string, IAmStrictlyTyped>
//       | Record<string, IAmStrictlyTyped | Record<string, IAmStrictlyTyped>>
//     >

// type NestedType = {
//   [key: string]: IAmStrictlyTyped | NestedType
// }

// const nest: NestedType = {
//   personal: {
//     faves: {
//       banana: {
//         name: 'banana',
//         description: 'a banana',
//         fruit: true,
//       },
//     },
//     justLike: {
//       orange: {
//         name: 'orange',
//         description: 'an orange',
//         fruit: true,
//       },
//       tomato: {
//         name: 'tomato',
//         description: 'an tomato',
//         fruit: false,
//       },
//     },
//   },
//   general: {
//     apple: {
//       name: 'apple',
//       description: 'an apple',
//       fruit: true,
//     },
//   },
// }
