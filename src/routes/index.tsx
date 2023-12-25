import { NavigationContainer } from '@react-navigation/native'

import { TabNavigator } from './TabNavigator'
import CustomTheme from './theme'

const Routes = () => (
  <NavigationContainer theme={CustomTheme}>
    <TabNavigator />
  </NavigationContainer>
)

export default Routes
