import { style } from '@vanilla-extract/css'
import { theme } from '../../../styles/theme.css'

export const content = style({
  width: '100%',
  margin: 'auto',
  maxWidth: '1440px',
  padding: '1em',
  marginTop: '3em',
})

export const iconButton = style({
  all: 'unset',
  padding: `clamp(8px, 2vw, 12px) 28px`,
  position: 'relative',
  boxShadow: `${theme.primary.border} 0px 8px 24px`,
  display: 'flex',
  alignItems: 'center',
  borderRadius: '4px',
  fontSize: `clamp(1em, 2vw, 1.1em)`,
  ':hover': {
    outline: 'none',
    boxShadow: `0px 0px 0px 4px ${theme.primary.border}`,
  },
  backgroundColor: `${theme.primary.surface}`,
  cursor: 'pointer',
  color: `${theme.primary.text}`,
})

export const arrowLeft = style({
  height: '1em',
  width: '1em',
  fill: `${theme.primary.text}`,
  marginRight: '1em',
})

export const countrySection = style({
  marginTop: '4em',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  justifyItems: 'flex-start',
  gap: 32,
})

export const grid = style({
  width: '100%',
})

export const flagContainer = style({
  maxHeight: '400px',
  height: '100%',
})

export const flag = style({
  width: '100%',
  objectFit: 'cover',
  height: '100%',
})

export const countryContainer = style({
  padding: '2em',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
})

export const title = style({
  color: `${theme.primary.text}`,
})

export const countryInfoContainer = style({
  flex: 1,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: `${theme.primary.text}`,
  flexWrap: 'wrap',
})

export const countryDetail = style({
  lineHeight: 3,
})

export const topic = style({
  marginRight: '8px',
  color: `${theme.primary.text}`,
})

export const border = style({
  backgroundColor: `${theme.primary.surface}`,
  padding: '0em 2em',
  marginRight: '8px',
  boxShadow: `${theme.primary.border} 0px 8px 24px`,
  borderRadius: '4px',
  display: 'inline-block',
  fontSize: '.7em',
  color: `${theme.primary.text}`,
})
