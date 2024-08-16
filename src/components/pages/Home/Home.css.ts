import { style } from '@vanilla-extract/css'

export const content = style({
  width: '100%',
  margin: 'auto',
  maxWidth: '1440px',
  padding: '1em',
  marginTop: '3em',
})

export const filterGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '32px',
})

export const seachContainer = style({
  width: '100%',

  '@media': {
    '(min-width:  1024px)': {
      width: '60%',
    },
  },
})

export const regionContainer = style({
  display: 'flex',
  width: '100%',

  '@media': {
    '(min-width:  470px)': {
      justifyContent: 'flex-end',
    },
  },
})

export const countriesContainer = style({
  marginTop: '3em',
})

export const countriesGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '64px',
  justifyItems: 'center',
  alignItems: 'center',
})
