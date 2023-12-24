import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import { Example, Information } from 'pages'
import { StackNavigator } from 'routes/StackNavigator'

import useNotification from 'infra/store/notification'

import type { GetScreenOptionsProps, TabBarIconProps } from './types'

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

const getScreenOptions = ({ route }: GetScreenOptionsProps) => ({
  tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
    let iconName

    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home-outline'
    }
    if (route.name === 'Example') {
      iconName = focused ? 'chatbubble' : 'chatbubble-outline'
    }
    if (route.name === 'Information') {
      iconName = focused
        ? 'ios-information-circle'
        : 'ios-information-circle-outline'
    }

    return <Ionicons name={iconName as any} size={size} color={color} />
  },
  ...screenOptionsStyles
})

const { Navigator, Screen } = createBottomTabNavigator()

export const TabNavigator = () => {
  const { stateNotification } = useNotification()
  const tabBarBadge =
    stateNotification.counter > 0 ? stateNotification.counter : undefined

  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home" screenOptions={getScreenOptions}>
        <Screen
          name="Home"
          component={StackNavigator}
          options={{ headerShown: false }}
        />
        <Screen name="Example" component={Example} options={{ tabBarBadge }} />
        <Screen name="Information" component={Information} />
      </Navigator>
    </NavigationContainer>
  )
}
