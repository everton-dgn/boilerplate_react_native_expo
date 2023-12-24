import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Example, Home } from 'pages'

import T from 'theme'

const screenOptionsStyles = {
  headerStyle: {
    backgroundColor: T.colors.blue
  },
  headerTitleStyle: {
    fontFamily: T.fonts.familiesWeights.medium,
    color: T.colors.white
  },
  headerBackTitleStyle: {
    fontFamily: T.fonts.familiesWeights.regular
  },
  headerTintColor: T.colors.white,
  headerTitleAlign: 'center',
  headerBackTitleVisible: false
} as const

const { Navigator, Screen } = createNativeStackNavigator()

export const StackNavigator = () => (
  <Navigator initialRouteName="Home" screenOptions={screenOptionsStyles}>
    <Screen name="Home" component={Home} />
    <Screen name="Example" component={Example} />
  </Navigator>
)
