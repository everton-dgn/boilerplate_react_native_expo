import { example } from './slice'

const useExample = () => {
  const stateExample = {
    ...example.get(),
    setIsActive: () => {
      example.isActive.set(prev => !prev)
    }
  }

  return { stateExample }
}

export default useExample
