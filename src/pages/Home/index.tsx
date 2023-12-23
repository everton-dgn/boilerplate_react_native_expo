import { View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { Text, TouchableOpacity } from 'components/atoms'

import S from './styles'

export const Home = () => {
  const { navigate } = useNavigation()

  return (
    <View style={S.container}>
      <Ionicons name="home" size={32} color="green" />
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
