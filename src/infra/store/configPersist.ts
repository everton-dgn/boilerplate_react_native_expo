import { configureObservablePersistence } from '@legendapp/state/persist'
import { ObservablePersistAsyncStorage } from '@legendapp/state/persist-plugins/async-storage'
import AsyncStorage from '@react-native-async-storage/async-storage'

configureObservablePersistence({
  pluginLocal: ObservablePersistAsyncStorage,
  localOptions: {
    asyncStorage: {
      AsyncStorage
    }
  }
})
