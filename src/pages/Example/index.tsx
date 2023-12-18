import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import S from './styles'

const Example = () => {
  const { navigate } = useNavigation()

  return (
    <View style={S.container}>
      <Text>Page Example</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          navigate('Home')
        }}
      />
    </View>
  )
}

export default Example
