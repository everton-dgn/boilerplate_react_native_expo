import { mergeIntoObservable } from '@legendapp/state'
import {
  configureObservablePersistence,
  persistObservable
} from '@legendapp/state/persist'
import { ObservablePersistAsyncStorage } from '@legendapp/state/persist-plugins/async-storage'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { example } from './slices'

const mergeSlices = mergeIntoObservable(example)

configureObservablePersistence({
  pluginLocal: ObservablePersistAsyncStorage,
  localOptions: {
    asyncStorage: {
      AsyncStorage
    }
  }
})

persistObservable(mergeSlices, {
  local: 'store'
})
