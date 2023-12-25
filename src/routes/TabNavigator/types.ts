import type { NavigatorScreenParams } from '@react-navigation/native'

import type { RootStackParamList } from 'routes/StackNavigator/types'

export type GetScreenOptionsProps = {
  route: {
    name: string
  }
}

export type TabBarIconProps = {
  focused: boolean
  color: string
  size: number
}

export type RootTabParamList = {
  HomeStack: NavigatorScreenParams<RootStackParamList>
  Example: undefined
  Information: undefined
}
