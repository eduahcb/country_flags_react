import { style, keyframes } from '@vanilla-extract/css'

const loading = keyframes({
  '0%': {
    backgroundColor: 'hsl(200, 20%, 80%)',
  },
  '100%': {
    backgroundColor: 'hsl(200, 20%, 95%)',
  },
})

export const container = style({
  animation: `${loading} 1s linear infinite alternate;`,
  height: 'auto',
  borderRadius: '4px',
  width: 'auto',
})

export const containerText = style([
  container,
  {
    width: '100%',
    minHeight: '16px',
  },
])

export const containerWithoutChildren = style([
  container,
  {
    width: '100%',
    height: '35px',
  },
])

export const childrenVisibility = style({
  height: 'auto',
  selectors: {
    [`${container} &`]: {
      visibility: 'hidden',
    },
  },
})
