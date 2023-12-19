import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { ParamList } from 'routes/types'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamList {}
  }
}

export type propsStack =
  NativeStackNavigationProp<ReactNavigation.RootParamList>
