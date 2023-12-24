import { StyleSheet } from 'react-native'

import T from 'theme'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: T.colors.white,
    flex: 1,
    gap: T.spacings.giga,
    justifyContent: 'center'
  },
  wrapper_state: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: T.spacings.md
  }
})

export default styles
