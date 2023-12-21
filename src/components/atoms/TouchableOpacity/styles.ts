import { StyleSheet } from 'react-native'

import T from 'theme'

const S = StyleSheet.create({
  text: {
    color: T.colors.white,
    fontFamily: T.fonts.familiesWeights.regular,
    fontSize: T.fonts.sizes.sm
  },
  touchableOpacity: {
    backgroundColor: T.colors.blue,
    borderRadius: T.borders.radius.sm,
    paddingHorizontal: T.spacings.md,
    paddingVertical: T.spacings.xs
  }
})

export default S
