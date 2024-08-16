import { style } from '@vanilla-extract/css'

import { theme } from '../../../styles/theme.css'

export const container = style({
  backgroundColor: theme.primary.surface,
  width: '100%',
  boxShadow: `${theme.primary.border} 0px 8px 24px`,
})

export const content = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1em',
  maxWidth: '1440px',
  margin: 'auto',
})

export const title = style({
  fontSize: `clamp(16px, 2vw, 28px)`,
  textTransform: 'capitalize',
  cursor: 'pointer',
  color: `${theme.primary.text}`,
})

export const link = style({
  textDecoration: 'none',
  color: 'inherit',
})

export const button = style({
  all: 'unset',
  fontSize: `clamp(14px, 2vw, 24px)`,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  textTransform: 'capitalize',
  color: `${theme.primary.text}`,
})

export const image = style({
  height: '.8em',
  width: '.8em',
  marginRight: '8px',
  fill: `${theme.primary.text}`,
})
