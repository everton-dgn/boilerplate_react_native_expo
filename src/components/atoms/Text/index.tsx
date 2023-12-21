import { Text as RnText, type TextProps } from 'react-native'

import S from './styles'

export const Text = ({ style, ...props }: TextProps) => (
  <RnText {...props} style={[S.text, style]} />
)
