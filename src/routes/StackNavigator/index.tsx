import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Example, Home } from 'pages'

import { screenOptionsStyles } from './config'

const { Navigator, Screen } = createNativeStackNavigator()

export const StackNavigator = () => (
  <Navigator initialRouteName="Home" screenOptions={screenOptionsStyles}>
    <Screen name="Home" component={Home} />
    <Screen name="Example" component={Example} />
  </Navigator>
)
