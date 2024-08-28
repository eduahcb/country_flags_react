import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as styles from './Details.css'

import { getCountryInfos } from '../../../helpers/getCountryInfos'

import ArrowLeft from './assets/arrow-left.svg?react'
import { Country } from '../../../types/country'
import { Skeleton } from '../../atoms/Skeleton'
import { getCountry } from '../../../services/api'
import { toast } from 'react-toastify'

export const Details = () => {
  const { name } = useParams()
  const [loading, setLoading] = useState(false)
  const [country, setCountry] = useState<Country>()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      const { error, data } = await getCountry(name || '')

      if (error) {
        toast.error(error.type)
      }

      if (data) {
        setCountry(getCountryInfos(data))
      }

      setLoading(false)
    }

    fetchData()
  }, [name])

  return (
    <main className={styles.content}>
      <section>
        <button
          aria-label="back"
          className={styles.iconButton}
          onClick={() => navigate('/')}
        >
          <ArrowLeft className={styles.arrowLeft} />
          back
        </button>
      </section>

      <section className={styles.countrySection}>
        <div className={styles.grid}>
          <Skeleton done={!loading}>
            <div className={styles.flagContainer}>
              <img
                className={styles.flag}
                src={country?.flag?.src}
                alt={country?.flag?.alt}
              />
            </div>
          </Skeleton>
        </div>
        <div className={styles.grid}>
          <div className={styles.countryContainer}>
            <h2 className={styles.title}>{country?.name?.common}</h2>
            <div className={styles.countryInfoContainer}>
              <div>
                <p className={styles.countryDetail}>
                  <strong className={styles.topic}>Population:</strong>
                  {country?.population}
                </p>
                <p className={styles.countryDetail}>
                  <strong className={styles.topic}>Region:</strong>
                  {country?.region}
                </p>
                <p className={styles.countryDetail}>
                  <strong className={styles.topic}>Sub Region:</strong>
                  {country?.subregion}
                </p>
                <p className={styles.countryDetail}>
                  <strong className={styles.topic}>Capital:</strong>
                  {country?.capital}
                </p>
              </div>
              <div>
                <p className={styles.countryDetail}>
                  <strong className={styles.topic}>Top Level Domain:</strong>
                  {country?.tld.join(', ')}
                </p>
                <p className={styles.countryDetail}>
                  <strong className={styles.topic}>Currencies:</strong>
                  {country?.currencies.join(', ')}
                </p>
                <p className={styles.countryDetail}>
                  <strong className={styles.topic}>Languages:</strong>
                  {country?.currencies.join(', ')}
                </p>
              </div>
            </div>
            <div>
              <p className={styles.countryDetail}>
                <strong className={styles.topic}>Borders:</strong>
                {country?.borders.map((border) => (
                  <span className={styles.border} key={border}>
                    {border}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
