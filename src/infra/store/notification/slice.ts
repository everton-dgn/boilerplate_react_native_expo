import { observable } from '@legendapp/state'
import { persistObservable } from '@legendapp/state/persist'

import type { NotificationType } from './types'

export const notification = observable<NotificationType>({
  counter: 0
})

persistObservable(notification, {
  local: 'notification'
})
