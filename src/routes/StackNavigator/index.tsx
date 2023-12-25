import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Example, Home } from 'pages'

import type { RootStackParamList } from './types'

import { screenOptionsStyles } from './config'

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export const StackNavigator = () => (
  <Navigator initialRouteName="HomeStack" screenOptions={screenOptionsStyles}>
    <Screen name="HomeStack" component={Home} options={{ title: 'Home' }} />
    <Screen name="Example" component={Example} />
  </Navigator>
)
