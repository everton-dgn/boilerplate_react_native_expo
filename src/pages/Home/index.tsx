import { View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { Text, TouchableOpacity } from 'components/atoms'

import useExample from 'infra/store/example'

import S from './styles'

export const Home = () => {
  const { navigate } = useNavigation()
  const { stateExample } = useExample()
  const title = stateExample.isActive ? 'ACTIVE' : 'INACTIVE'

  return (
    <View style={S.container}>
      <Text>Page Home</Text>
      <TouchableOpacity
        label="Update Global State Persistent"
        onPress={() => {
          stateExample.setIsActive()
        }}
      />
      <View style={S.wrapper_state}>
        {stateExample.isActive ? (
          <Ionicons name="checkmark-circle-outline" size={32} color="green" />
        ) : (
          <Ionicons name="close-circle-outline" size={32} color="red" />
        )}
        <Text>{title}</Text>
      </View>
      <TouchableOpacity
        label="Go to Example Page"
        onPress={() => {
          navigate('Example')
        }}
      />
    </View>
  )
}
