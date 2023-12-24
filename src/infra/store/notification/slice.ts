import { observable } from '@legendapp/state'

import type { NotificationType } from './types'

export const notification = observable<NotificationType>({
  counter: 0
})
