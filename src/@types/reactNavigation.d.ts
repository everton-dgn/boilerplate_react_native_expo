import type { RootTabParamList } from 'routes/TabNavigator/types'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootTabParamList {}

    type PageProps = {
      route?: RouteProp<RootParamList, keyof RootParamList>
      navigation?: StackNavigationProp<RootParamList, keyof RootParamList>
    }
  }
}
