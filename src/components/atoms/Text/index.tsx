import { Text as RnText, type TextProps } from 'react-native'
import S from './styles'

const Text = ({ style, ...props }: TextProps) => (
  <RnText {...props} style={[S.text, style]} />
)

export default Text
