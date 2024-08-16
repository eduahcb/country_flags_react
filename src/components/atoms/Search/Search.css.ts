import { style } from '@vanilla-extract/css'
import { theme } from '../../../styles/theme.css'

export const container = style({
  padding: `clamp(8px, 2vw, 12px) 16px`,
  boxShadow: `${theme.primary.border} 0px 8px 24px`,
  display: 'flex',
  alignItems: 'center',
  borderRadius: '4px',
  fontSize: `clamp(1em, 2vw, 1.1em)`,
  backgroundColor: `${theme.primary.surface}`,

  ':focus-within': {
    outline: 'none',
    boxShadow: `0px 0px 0px 4px ${theme.primary.border}`,
  },
})

export const input = style({
  all: 'unset',
  flex: '1',
  margin: '0 1em',
  width: '100%',
  color: `${theme.primary.text}`,
  '::placeholder': {
    color: `${theme.primary.text}`,
  },
})

export const searchIcon = style({
  height: '1.2em',
  width: '1.2em',
  fill: `${theme.primary.text}`,
})

export const iconButton = style({
  background: 'none',
  border: 'none',
  display: 'flex',
  padding: '.3em',
  cursor: 'pointer',
  color: `${theme.primary.text}`,
  ':hover': {
    backgroundColor: `${theme.primary.border}`,
  },
})

export const closeIcon = style({
  height: '1em',
  width: '1em',
  fill: `${theme.primary.text}`,
})
