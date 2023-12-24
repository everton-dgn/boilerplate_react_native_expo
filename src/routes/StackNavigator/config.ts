import T from 'theme'

export const screenOptionsStyles = {
  headerStyle: {
    backgroundColor: T.colors.blue
  },
  headerTitleStyle: {
    fontFamily: T.fonts.familiesWeights.medium,
    color: T.colors.white
  },
  headerBackTitleStyle: {
    fontFamily: T.fonts.familiesWeights.regular
  },
  headerTintColor: T.colors.white,
  headerTitleAlign: 'center',
  headerBackTitleVisible: false
} as const
