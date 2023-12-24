import { mergeIntoObservable } from '@legendapp/state'
import {
  configureObservablePersistence,
  persistObservable
} from '@legendapp/state/persist'
import { ObservablePersistMMKV } from '@legendapp/state/persist-plugins/mmkv'

import { example, notification } from './slices'

const mergeSlices = mergeIntoObservable(example, notification)

configureObservablePersistence({
  pluginLocal: ObservablePersistMMKV
})

persistObservable(mergeSlices, {
  local: 'store'
})
