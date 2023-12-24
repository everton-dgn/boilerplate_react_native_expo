import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import { Example, Information } from 'pages'
import { StackNavigator } from 'routes/StackNavigator'

import useNotification from 'infra/store/notification'

import { getScreenOptions } from './config'

const { Navigator, Screen } = createBottomTabNavigator()

export const TabNavigator = () => {
  const { stateNotification } = useNotification()
  const tabBarBadge =
    stateNotification.counter > 0 ? stateNotification.counter : undefined

  return (
    <NavigationContainer>
      <Navigator screenOptions={getScreenOptions}>
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
