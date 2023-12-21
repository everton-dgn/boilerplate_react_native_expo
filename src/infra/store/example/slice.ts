import { observable } from '@legendapp/state'

import type { ExampleType } from './types'

export const example = observable<ExampleType>({
  isActive: false
})
