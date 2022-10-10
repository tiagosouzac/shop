import { createStitches } from '@stitches/react'

export const {
  config,
  theme,
  createTheme,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
} = createStitches({
  theme: {
    colors: {
      white: '#ffffff',
      green300: '#00b37e',
      green500: '#00875f',
      gray100: '#e1e1e6',
      gray300: '#c4c4cc',
      gray800: '#202024',
      gray900: '#121214',
    },
  },
})
