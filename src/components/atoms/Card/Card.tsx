import { Skeleton } from '../Skeleton'
import * as styles from './Card.css'

import { Country } from '../../../types/country'
import { useState } from 'react'

type Prop = {
  isLoading?: boolean
  country?: Country
  onClick?: () => void
}

export const Card = ({ isLoading, country, onClick }: Prop) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const isDone = !isLoading && imageLoaded

  const handleOnClick = () => {
    onClick?.()
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={styles.container}
      onClick={handleOnClick}
      role="button"
      tabIndex={0}
    >
      <Skeleton done={isDone}>
        <div className={styles.imageContainer}>
          <img
            fetchPriority="high"
            className={styles.image}
            src={country?.flag.src}
            alt={country?.flag.alt}
            onLoad={() => {
              setImageLoaded(true)
            }}
          />
        </div>
      </Skeleton>
      <div className={styles.countryPainel}>
        <Skeleton type="text" done={isDone}>
          <h2 className={styles.countryName}>{country?.name.common}</h2>
        </Skeleton>
        <div className={styles.detailsContainer}>
          <Skeleton type="text" done={isDone}>
            <p className={styles.detail}>
              <strong className={styles.detailLabel}>Population:</strong>
              {country?.population}
            </p>
          </Skeleton>
          <Skeleton type="text" done={isDone}>
            <p className={styles.detail}>
              <strong className={styles.detailLabel}>Region:</strong>
              {country?.region}
            </p>
          </Skeleton>

          <Skeleton type="text" done={isDone}>
            <p className={styles.detail}>
              <strong className={styles.detailLabel}>Capital:</strong>
              {country?.capital}
            </p>
          </Skeleton>
        </div>
      </div>
    </div>
  )
}
