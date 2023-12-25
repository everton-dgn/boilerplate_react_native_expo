import { View } from 'react-native'

import { Text, TouchableOpacity } from 'components/atoms'

import S from './styles'

export const Home = ({ navigation }: ReactNavigation.PageProps) => (
  <View style={S.container}>
    <Text>Page Home</Text>
    <TouchableOpacity
      label="Go to Example Page"
      onPress={() => {
        navigation?.navigate('HomeStack', { screen: 'Example' })
      }}
    />
  </View>
)
