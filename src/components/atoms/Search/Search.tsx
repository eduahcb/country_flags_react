/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useRef } from 'react'
import * as styles from './Search.css'

import CloseSVG from './assets/close.svg?react'
import SearchSVG from './assets/search.svg?react'

type Props = {
  defaultValue: string
  onChange?: (value: string) => void
  onSubmit?: (value: string) => void
  onClear?: () => void
}

export const Search = ({
  defaultValue,
  onChange,
  onSubmit,
  onClear,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleOnClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.focus()
    }
  }

  const handleOnKeyDown = (event: any) => {
    if (event.key === 'Enter' || event.key === ' ') {
      if (inputRef.current !== null) {
        inputRef.current.focus()
      }
    }
  }

  const handleOnSubmit = (event: any) => {
    if (event.key === 'Enter') {
      onSubmit?.(event.target.value)
    }
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value)
  }

  const handleOnClear = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
    }
    onClear?.()
  }

  return (
    <div
      role="button"
      tabIndex={0}
      className={styles.container}
      onClick={handleOnClick}
      onKeyDown={handleOnKeyDown}
      aria-label="Search for a country..."
    >
      <SearchSVG role="presentation" className={styles.searchIcon} />
      <input
        ref={inputRef}
        tabIndex={0}
        type="text"
        className={styles.input}
        placeholder="Search for a country..."
        onChange={handleOnChange}
        onKeyDown={handleOnSubmit}
        defaultValue={defaultValue}
      />
      <button
        aria-label="close"
        className={styles.iconButton}
        onClick={handleOnClear}
      >
        <CloseSVG className={styles.closeIcon} role="presentation" />
      </button>
    </div>
  )
}
