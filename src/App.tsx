import { StatusBar } from 'expo-status-bar'
import { registerRootComponent } from 'expo'
import Routes from 'routes'

const App = () => {
  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>
  )
}

export default App

registerRootComponent(App)
