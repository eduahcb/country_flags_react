import { style } from '@vanilla-extract/css'
import { theme } from '../../../styles/theme.css'

export const container = style({
  cursor: 'pointer',
  ':hover': {
    backgroundColor: `${theme.primary.border}`,
  },
  ':focus': {
    outline: 'none',
    backgroundColor: `${theme.primary.border}`,
  },
  padding: `clamp(8px, 2vw, 12px) 24px`,
  borderRadius: '4px',
  color: `${theme.primary.text}`,
})
