import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import S from './styles'

const Home = () => {
  const { navigate } = useNavigation()

  return (
    <View style={S.container}>
      <Text>Page Home</Text>
      <Button
        title="Go to Example"
        onPress={() => {
          navigate('Example')
        }}
      />
    </View>
  )
}

export default Home
