import { View } from 'react-native'

import { Text, TouchableOpacity } from 'components/atoms'

import useNotification from 'infra/store/notification'

import Logo from 'assets/svg/logo.svg'

import S from './styles'

export const Example = () => {
  const { stateNotification } = useNotification()

  return (
    <View style={S.container}>
      <Logo width={150} height={150} />
      <Text>Page Example</Text>
      <TouchableOpacity
        label="Get Notifications"
        onPress={() => stateNotification.setCounter()}
      />
      <Text>{stateNotification.counter} Notifications</Text>
      <TouchableOpacity
        label="Clear Notifications"
        onPress={() => stateNotification.setClear()}
      />
    </View>
  )
}
