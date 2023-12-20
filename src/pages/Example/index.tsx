import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity } from 'components/atoms'
import S from './styles'

export const Example = () => {
  const { navigate } = useNavigation()

  return (
    <View style={S.container}>
      <Text>Page Example</Text>
      <TouchableOpacity
        label="Go to Home"
        onPress={() => {
          navigate('Home')
        }}
      />
    </View>
  )
}
