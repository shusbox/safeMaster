export const colors = {
  primary: '#ff669c',
  primaryHover: '#e25e8cff',

  natural: '#f3f3f3ff',
  naturalHover: '#e1e1e1ff',

  optionPrimary: '#ffffff',
  optionSecondary: '#ffe6ee',
  optionTertiary: '#ff8db5ff',
  optionDisabled: '#c35e80ff',

  textPrimary: '#000000',
  textSecondary: '#898687ff',
  textDisabled: '#ffffff',

  bgPrimary: '#ffffff',
  bgSecondary: '#ffe6ee',
  bgTertiary: '#f7f6f6ff',
  bgDisabled: '#00000047',
}

export const borderRadius = {
  sm: `4px`,
  md: `8px`,
  lg: `12px`,
  full: `9999px`,
}

export const shadow = {
  primary: `box-shadow: 0 4px 0 ${colors.optionDisabled}`,
}

export const transform = {
  float: `translateY(-4px)`,
}

export const theme = {
  colors,
  borderRadius,
  shadow,
  transform,
}