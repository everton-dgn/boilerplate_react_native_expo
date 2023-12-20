import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity } from 'components/atoms'
import S from './styles'
import { Ionicons } from '@expo/vector-icons'

export const Home = () => {
  const { navigate } = useNavigation()

  return (
    <View style={S.container}>
      <Text>Page Home</Text>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <TouchableOpacity
        label="Go to Example"
        onPress={() => {
          navigate('Example')
        }}
      />
    </View>
  )
}
