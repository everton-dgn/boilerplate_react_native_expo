import { observable } from '@legendapp/state'
import { persistObservable } from '@legendapp/state/persist'

import type { ExampleType } from './types'

export const example = observable<ExampleType>({
  isActive: false
})

persistObservable(example, {
  local: 'example'
})
