import { StatusBar } from 'expo-status-bar'
import { registerRootComponent } from 'expo'
import Routes from 'routes'
import ManProvider from 'providers/Main'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync().catch((error: any) => error)

const App = () => (
  <ManProvider>
    <Routes />
    <StatusBar style="auto" />
  </ManProvider>
)

export default App

registerRootComponent(App)
