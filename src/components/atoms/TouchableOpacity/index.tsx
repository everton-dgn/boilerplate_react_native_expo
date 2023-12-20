import { TouchableOpacity as RnTouchableOpacity } from 'react-native'
import { Text } from '../Text'
import type { TouchableOpacityProps } from './types'
import S from './styles'

export const TouchableOpacity = ({
  label,
  style,
  ...props
}: TouchableOpacityProps) => (
  <RnTouchableOpacity {...props} style={[S.touchableOpacity, style]}>
    <Text style={S.text}>{label}</Text>
  </RnTouchableOpacity>
)
