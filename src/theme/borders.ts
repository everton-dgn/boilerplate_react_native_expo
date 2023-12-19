const radius = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 12,
  xxl: 16,
  circle: '50%'
} as const

const width = {
  none: 0,
  sm: 1,
  md: 2
} as const

const borders = {
  radius,
  width
} as const

export default borders
