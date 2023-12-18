import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from 'pages/Home'
import Example from 'pages/Example'

const { Navigator, Screen } = createNativeStackNavigator()

const Routes = () => (
  <NavigationContainer>
    <Navigator initialRouteName="home">
      <Screen name="Home" component={Home} />
      <Screen name="Example" component={Example} />
    </Navigator>
  </NavigationContainer>
)

export default Routes
