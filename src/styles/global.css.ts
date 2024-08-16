import { globalStyle } from '@vanilla-extract/css'

globalStyle('html', {
  fontSize: '1rem',
  fontFamily: '"Nunito Sans", sans-serif',
  fontWeight: 300,
  boxSizing: 'border-box',
  height: 'auto',
  minHeight: '100%',
})

globalStyle('*, *::before, *::after', {
  margin: 0,
  padding: 0,
  boxSizing: 'inherit',
})

globalStyle('body, #root, #app', {
  minHeight: '100vh',
  transition: 'color 0.4s ease-in-out, background-color 0.4s ease-in-out',
})

globalStyle('a, button, input, select, textarea', {
  fontFamily: '"Nunito Sans", sans-serif',
})
