import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { registerRootComponent } from 'expo'

const colors = {
  white: '#fff',
  black: '#000'
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center'
  }
})

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to!!!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default App

registerRootComponent(App)
