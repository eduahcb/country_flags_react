import { style } from '@vanilla-extract/css'
import { theme } from '../../../styles/theme.css'

const borderBottomRadius = style({
  borderBottomLeftRadius: '4px',
  borderBottomRightRadius: '4px',
})

export const container = style([
  borderBottomRadius,
  {
    boxShadow: `${theme.primary.border} 0px 8px 24px`,
    width: '260px',
    height: '340px',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    ':hover': {
      boxShadow: `${theme.primary.text} 0px 0px 4px`,
    },
  },
])

export const countryName = style({
  fontSize: '1.2em',
  color: `${theme.primary.text}`,
})

export const imageContainer = style({
  height: '150px',
})

export const image = style({
  height: '100%',
  maxWidth: '100%',
  width: '100%',
  borderTopLeftRadius: '4px',
  borderTopRightRadius: '4px',
  objectFit: 'cover',
})

export const countryPainel = style([
  borderBottomRadius,
  {
    backgroundColor: `${theme.primary.surface}`,
    padding: '1em 1.3em',
    flex: 1,
  },
])

export const detailsContainer = style({
  margin: '1em 0',
})

export const detail = style({
  wordBreak: 'break-word',
  lineHeight: '1.5',
  color: `${theme.primary.text}`,
  marginBottom: '2px',
})

export const detailLabel = style({
  marginRight: '8px',
})
