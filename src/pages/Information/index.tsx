import { View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import { Text, TouchableOpacity } from 'components/atoms'

import useExample from 'infra/store/example'

import S from './styles'

export const Information = () => {
  const { stateExample } = useExample()
  const title = stateExample.isActive ? 'ACTIVE' : 'INACTIVE'

  return (
    <View style={S.container}>
      <Text>Page Information</Text>
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
    </View>
  )
}
