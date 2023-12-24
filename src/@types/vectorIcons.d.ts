import type { Ionicons } from '@expo/vector-icons'

declare global {
  type IoniconsName = keyof typeof Ionicons.glyphMap
}
