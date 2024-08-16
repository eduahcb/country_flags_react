import { style } from '@vanilla-extract/css'
import { theme } from '../../../styles/theme.css'

export const container = style({
  padding: `clamp(8px, 2vw, 12px) 24px`,
  position: 'relative',
  boxShadow: `${theme.primary.border} 0px 8px 24px`,
  display: 'flex',
  alignItems: 'center',
  borderRadius: '4px',
  fontSize: `clamp(1em, 2vw, 1.1em)`,
  ':focus': {
    outline: 'none',
    boxShadow: `0px 0px 0px 4px ${theme.primary.border}`,
  },
  backgroundColor: `${theme.primary.surface}`,
  minWidth: '210px',
  cursor: 'pointer',
})

export const input = style({
  display: 'none',
})

export const displayContainer = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
})

export const display = style({
  color: `${theme.primary.text}`,
  marginRight: '1em',
  flex: 1,
})

export const arrowDowIcon = style({
  height: '.9em',
  width: '.9em',
  fill: `${theme.primary.text}`,
})

export const menuOptionContainer = style({
  position: 'absolute',
  top: '0',
  left: '0',
  transform: 'translateY(3em)',
  boxShadow: `${theme.primary.border} 0px 8px 24px`,
  width: '100%',
  backgroundColor: `${theme.primary.surface}`,
  borderRadius: '4px',
})
