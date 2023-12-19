import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Text from 'components/atoms/Text'
import TouchableOpacity from 'components/atoms/TouchableOpacity'
import S from './styles'

const Example = () => {
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

export default Example
