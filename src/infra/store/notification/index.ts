import { notification } from './slice'

const useNotification = () => {
  const stateNotification = {
    ...notification.get(),
    setCounter: () => notification.counter.set(prev => prev + 1),
    setClear: () => notification.counter.set(0)
  }

  return { stateNotification }
}

export default useNotification
