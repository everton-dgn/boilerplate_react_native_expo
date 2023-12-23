import { mergeIntoObservable } from '@legendapp/state'
import {
  configureObservablePersistence,
  persistObservable
} from '@legendapp/state/persist'
import { ObservablePersistMMKV } from '@legendapp/state/persist-plugins/mmkv'

import { example } from './slices'

const mergeSlices = mergeIntoObservable(example)

configureObservablePersistence({
  pluginLocal: ObservablePersistMMKV
})

persistObservable(mergeSlices, {
  local: 'store'
})
