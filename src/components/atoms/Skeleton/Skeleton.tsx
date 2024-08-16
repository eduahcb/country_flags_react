import { ReactNode } from 'react'
import * as styles from './Skeleton.css'

type Prop = {
  children?: ReactNode
  done?: boolean
  type?: 'text' | 'default'
}

export const Skeleton = ({
  children,
  done = false,
  type = 'default',
}: Prop) => {
  const loading = !done

  if (!loading) return children

  const skeletonClass =
    type === 'text' ? styles.containerText : styles.container

  return (
    <div
      className={`${children ? skeletonClass : styles.containerWithoutChildren}`}
    >
      <div className={styles.childrenVisibility}>{children}</div>
    </div>
  )
}
