import { StatusBar } from 'expo-status-bar'
import { registerRootComponent } from 'expo'
import Routes from 'routes'
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  useFonts
} from '@expo-google-fonts/poppins'

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  })

  if (!fontsLoaded) return null

  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>
  )
}

export default App

registerRootComponent(App)
