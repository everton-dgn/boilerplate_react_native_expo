import type { RootTabParamList } from 'routes/TabNavigator/types'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootTabParamList {}
  }
}
