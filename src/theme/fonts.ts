const familiesWeights = {
  regular: 'Poppins_400Regular',
  medium: 'Poppins_500Medium',
  semiBold: 'Poppins_600SemiBold'
} as const

const sizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 22
} as const

const fonts = {
  familiesWeights,
  sizes
} as const

export default fonts
