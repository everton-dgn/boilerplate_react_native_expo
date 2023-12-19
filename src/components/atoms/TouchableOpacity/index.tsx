import { TouchableOpacity as RnTouchableOpacity } from 'react-native'
import Text from 'components/atoms/Text'
import type { TouchableOpacityProps } from './types'
import S from './styles'

const TouchableOpacity = ({
  label,
  style,
  ...props
}: TouchableOpacityProps) => (
  <RnTouchableOpacity {...props} style={[S.touchableOpacity, style]}>
    <Text style={S.text}>{label}</Text>
  </RnTouchableOpacity>
)

export default TouchableOpacity
