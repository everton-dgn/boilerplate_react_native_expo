import { useCallback, type ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  useFonts
} from '@expo-google-fonts/poppins'
import { Ionicons } from '@expo/vector-icons'
import { enableReactNativeComponents } from '@legendapp/state/config/enableReactNativeComponents'
import { enableReactTracking } from '@legendapp/state/config/enableReactTracking'
import * as SplashScreen from 'expo-splash-screen'

import 'infra/store/configPersist'

enableReactNativeComponents()
enableReactTracking({ auto: true })

const S = StyleSheet.create({
  container: {
    flex: 1
  }
})

const ManProvider = ({ children }: { children: ReactNode }) => {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    ...Ionicons.font
  })

  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync().catch((error: any) => error)
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <View
      style={[S.container, StyleSheet.absoluteFill]}
      onLayout={onLayoutRootView}
    >
      {children}
    </View>
  )
}

export default ManProvider
