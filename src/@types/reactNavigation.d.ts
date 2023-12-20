import type { ParamList } from 'routes/types'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamList {}
  }
}
