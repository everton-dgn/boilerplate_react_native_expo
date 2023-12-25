import { View } from 'react-native'

import { Text, TouchableOpacity } from 'components/atoms'

import type { HomeProps } from './types'

import S from './styles'

export const Home = ({ navigation }: HomeProps) => (
  <View style={S.container}>
    <Text>Page Home</Text>
    <TouchableOpacity
      label="Go to Example Page"
      onPress={() => {
        navigation.navigate('Example')
      }}
    />
  </View>
)
