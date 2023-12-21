import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home, Example } from 'pages'

import T from 'theme'

const { Navigator, Screen } = createNativeStackNavigator()

const Routes = () => (
  <NavigationContainer>
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: T.fonts.familiesWeights.medium,
          color: T.colors.dark
        },
        headerBackTitleStyle: {
          fontFamily: T.fonts.familiesWeights.regular
        },
        headerTintColor: T.colors.dark
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Example" component={Example} />
    </Navigator>
  </NavigationContainer>
)

export default Routes
