import type { RootStackParamList } from 'routes/StackNavigator'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}

    type PageProps = {
      route?: RouteProp<RootParamList, keyof RootParamList>
      navigation?: StackNavigationProp<RootParamList, keyof RootParamList>
    }
  }
}
