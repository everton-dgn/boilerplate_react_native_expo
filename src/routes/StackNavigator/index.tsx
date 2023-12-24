import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Example, Home } from 'pages'

import { screenOptionsStyles } from './config'

const { Navigator, Screen } = createNativeStackNavigator()

export const StackNavigator = () => (
  <Navigator initialRouteName="HomeStack" screenOptions={screenOptionsStyles}>
    <Screen name="HomeStack" component={Home} options={{ title: 'Home' }} />
    <Screen name="Example" component={Example} />
  </Navigator>
)
