import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined
      Example: undefined
    }
  }
}

export type propsStack =
  NativeStackNavigationProp<ReactNavigation.RootParamList>
