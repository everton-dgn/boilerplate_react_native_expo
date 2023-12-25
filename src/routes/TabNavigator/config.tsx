import { Ionicons } from '@expo/vector-icons'

import type {
  RootTabParamList,
  GetScreenOptionsProps,
  TabBarIconProps
} from './types'

import T from 'theme'

const screenOptionsStyles = {
  headerStyle: {
    backgroundColor: T.colors.blue
  },
  headerTitleStyle: {
    fontFamily: T.fonts.familiesWeights.medium,
    color: T.colors.white
  },
  headerTitleAlign: 'center',
  tabBarActiveTintColor: T.colors.blue,
  tabBarInactiveTintColor: T.colors.gray
} as const

const icons: Record<keyof RootTabParamList, IoniconsName> = {
  HomeStack: 'home',
  Example: 'chatbubble',
  Information: 'ios-information-circle'
} as const

export const getScreenOptions = ({ route }: GetScreenOptionsProps) =>
  ({
    tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
      const icon = icons[route.name as keyof RootTabParamList]
      const prefix = focused ? '' : '-outline'
      const iconName = `${icon}${prefix}`
      return (
        <Ionicons name={iconName as IoniconsName} size={size} color={color} />
      )
    },
    ...screenOptionsStyles
  }) as const
