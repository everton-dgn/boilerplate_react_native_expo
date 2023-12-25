import type { RootTabParamList } from 'routes/TabNavigator/types'

export type HomeProps = {
  navigation: {
    navigate: (screen: keyof RootTabParamList) => void
  }
}
