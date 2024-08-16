/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy, Suspense } from 'react'
import { useInView } from 'react-intersection-observer'

import * as styles from './Home.css'

import { Search } from '../../atoms/Search'
import { Select } from '../../atoms/Select'
import { useHomeService } from './useHomeService'

import { Country } from '../../../types/country'

const Card = lazy(() =>
  import('../../atoms/Card').then((module) => ({
    default: module.Card,
  })),
)

export const Home = () => {
  const {
    countries,
    isLoading,
    searchByCountryName,
    filterByRegion,
    clearSearch,
    region,
    regions,
    search,
    navigateToDetails,
  } = useHomeService()

  return (
    <main className={styles.content}>
      <section className={styles.filterGrid}>
        <div>
          <div className={styles.seachContainer}>
            <Search
              defaultValue={search || ''}
              onClear={clearSearch}
              onSubmit={searchByCountryName}
            />
          </div>
        </div>
        <div>
          <div className={styles.regionContainer}>
            <Select value={region} onChange={filterByRegion}>
              <Select.Option value="clear">Clear regions</Select.Option>
              {regions.map((region) => (
                <Select.Option key={region} value={region}>
                  {region}
                </Select.Option>
              ))}
            </Select>
          </div>
        </div>
      </section>
      <section className={styles.countriesContainer}>
        <div className={styles.countriesGrid}>
          {isLoading ? (
            <>
              <DynamicCountryCard isLoading />
              <DynamicCountryCard isLoading />
              <DynamicCountryCard isLoading />
              <DynamicCountryCard isLoading />
            </>
          ) : (
            countries.map((country, index) => (
              <DynamicCountryCard
                key={index}
                country={country}
                navigateToDetails={() => navigateToDetails(country.name.common)}
              />
            ))
          )}
        </div>
      </section>
    </main>
  )
}

type DynamicCountryCardProp = {
  isLoading?: boolean
  country?: Country
  navigateToDetails?: () => void
}

function DynamicCountryCard({
  country,
  isLoading,
  navigateToDetails,
}: DynamicCountryCardProp) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  return (
    <div ref={ref}>
      <Suspense>
        {inView ? (
          <Card
            country={country}
            onClick={navigateToDetails}
            isLoading={isLoading}
          />
        ) : null}
      </Suspense>
    </div>
  )
}
