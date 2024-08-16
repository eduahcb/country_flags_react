import { style } from '@vanilla-extract/css'

import { theme } from './styles/theme.css'

export const container = style({
  height: 'inherit',
  backgroundColor: theme.primary['surface-high-emphasis'],
})
