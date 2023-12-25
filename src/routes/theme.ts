import { DefaultTheme, type Theme } from '@react-navigation/native'

import T from 'theme'

const CustomTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: T.colors.blueLight,
    border: T.colors.gray,
    notification: T.colors.alert
  }
}

export default CustomTheme
