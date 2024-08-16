import { ReactNode, SyntheticEvent } from 'react'

import * as styles from './SelecOption.css'

type Prop = {
  children: ReactNode
  value?: string
  key?: string
  onClick?: () => void
}

export const SelectOption = ({ children, onClick }: Prop) => {
  const handleOnClick = (event: SyntheticEvent) => {
    event.stopPropagation()
    onClick?.()
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnKeyDown = (event: any) => {
    event.stopPropagation()

    if (event.key === 'Enter') {
      onClick?.()
    }
  }

  return (
    <div
      className={styles.container}
      role="option"
      aria-selected="false"
      tabIndex={0}
      onClick={handleOnClick}
      onKeyDown={handleOnKeyDown}
    >
      {children}
    </div>
  )
}
