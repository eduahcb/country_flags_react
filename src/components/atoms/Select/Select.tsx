import {
  Children,
  cloneElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'

import ArrowDownSVG from './assets/arrow-down.svg?react'

import * as styles from './Select.css'

type Prop = {
  children?: ReactNode
  value: string
  onChange: (value: string) => void
}

import { SelectOption } from './SelectOption'

export const Select = ({ children, value, onChange }: Prop) => {
  const [isOpen, setOpen] = useState(false)

  const displayValue = useRef(null)

  const handleOnClick = () => {
    setOpen((prev) => !prev)
  }

  const handleOnClickOption = (selectedValue: string) => {
    if (value !== selectedValue) {
      setOpen(false)
      onChange?.(selectedValue)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      setOpen((prev) => !prev)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const options = Children.toArray(children).map((child: any) => {
    if (value === child.props.value) {
      displayValue.current = child.props.children
    }

    return cloneElement(child, {
      onClick: () => handleOnClickOption(child.props.value),
      onKeyDown: () => handleOnKeyDown(child.props.value),
    })
  })

  const displayText = displayValue.current || 'Filter by region...'

  useEffect(() => {
    if (displayValue.current) {
      displayValue.current = null
    }
  }, [value])

  return (
    <div
      role="button"
      className={styles.container}
      tabIndex={0}
      onClick={handleOnClick}
      onKeyDown={handleOnKeyDown}
    >
      <div className={styles.displayContainer}>
        <span className={styles.display}>{displayText}</span>
        <ArrowDownSVG className={styles.arrowDowIcon} role="presentation" />
      </div>
      <input className={styles.input} defaultValue={value} />
      {isOpen && <div className={styles.menuOptionContainer}>{options}</div>}
    </div>
  )
}

Select.Option = SelectOption
