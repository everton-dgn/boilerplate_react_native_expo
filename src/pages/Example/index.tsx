import { View } from 'react-native'

import { Text, TouchableOpacity } from 'components/atoms'

import useExample from 'infra/store/example'

import Logo from 'assets/svg/logo.svg'

import S from './styles'

export const Example = () => {
  const { stateExample } = useExample()
  const title = stateExample.isActive ? 'Active' : 'Inactive'

  return (
    <View style={S.container}>
      <Logo width={150} height={150} />
      <Text>Page Example - {title}</Text>
      <TouchableOpacity
        label="Update Global State Persistent"
        onPress={() => {
          stateExample.setIsActive()
        }}
      />
    </View>
  )
}
