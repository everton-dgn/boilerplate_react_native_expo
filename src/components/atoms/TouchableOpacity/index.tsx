import { TouchableOpacity as RnTouchableOpacity } from 'react-native'

import type { TouchableOpacityProps } from './types'

import S from './styles'

import { Text } from '../Text'

export const TouchableOpacity = ({
  label,
  style,
  ...props
}: TouchableOpacityProps) => (
  <RnTouchableOpacity {...props} style={[S.touchableOpacity, style]}>
    <Text style={S.text}>{label}</Text>
  </RnTouchableOpacity>
)
