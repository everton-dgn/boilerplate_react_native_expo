import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Text from 'components/atoms/Text'
import TouchableOpacity from 'components/atoms/TouchableOpacity'
import S from './styles'

const Home = () => {
  const { navigate } = useNavigation()

  return (
    <View style={S.container}>
      <Text>Page Home</Text>
      <TouchableOpacity
        label="Go to Example"
        onPress={() => {
          navigate('Example')
        }}
      />
    </View>
  )
}

export default Home
