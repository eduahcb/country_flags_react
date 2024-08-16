import { createTheme, createThemeContract } from '@vanilla-extract/css'

export const theme = createThemeContract({
  primary: {
    text: null,
    border: null,
    surface: null,
    'surface-high-emphasis': null,
  },
})

export const light = createTheme(theme, {
  primary: {
    text: '#111517',
    border: '#959da533',
    surface: '#ffffff',
    'surface-high-emphasis': '#fafafa',
  },
})

export const dark = createTheme(theme, {
  primary: {
    text: '#ffffff',
    border: '#1115175b',
    surface: '#2b3945',
    'surface-high-emphasis': '#202c37',
  },
})
