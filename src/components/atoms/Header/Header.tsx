import { Link } from 'react-router-dom'

import * as styles from './Header.css'

import { dark, light } from '../../../styles/theme.css'

import MoonSVG from './assets/moon.svg?react'

type Prop = {
  theme: string
  onToggle: () => void
}

export const Header = ({ theme, onToggle }: Prop) => {
  const text = {
    [dark]: 'light',
    [light]: 'dark',
  }[theme]

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <Link className={styles.link} to="/">
            where in the world?
          </Link>
        </h1>
        <button aria-label="theme" className={styles.button} onClick={onToggle}>
          <MoonSVG className={styles.image} role="presentation" />
          {text}
        </button>
      </div>
    </header>
  )
}
