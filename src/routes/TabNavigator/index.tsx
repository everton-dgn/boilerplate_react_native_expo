import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Example, Information } from 'pages'
import { StackNavigator } from 'routes/StackNavigator'

import useNotification from 'infra/store/notification'

import type { RootTabParamList } from './types'

import { getScreenOptions } from './config'

const { Navigator, Screen } = createBottomTabNavigator<RootTabParamList>()

export const TabNavigator = () => {
  const { stateNotification } = useNotification()
  const tabBarBadge =
    stateNotification.counter > 0 ? stateNotification.counter : undefined

  return (
    <Navigator initialRouteName="HomeStack" screenOptions={getScreenOptions}>
      <Screen
        name="HomeStack"
        component={StackNavigator}
        options={{ headerShown: false, title: 'Home' }}
      />
      <Screen name="Example" component={Example} options={{ tabBarBadge }} />
      <Screen name="Information" component={Information} />
    </Navigator>
  )
}
