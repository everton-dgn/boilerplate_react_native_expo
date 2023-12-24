import { registerRootComponent } from 'expo'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'

import ManProvider from 'providers/Main'
import { TabNavigator } from 'routes/TabNavigator'

SplashScreen.preventAutoHideAsync().catch((error: any) => error)

const App = () => (
  <ManProvider>
    <TabNavigator />
    <StatusBar style="light" />
  </ManProvider>
)

registerRootComponent(App)
