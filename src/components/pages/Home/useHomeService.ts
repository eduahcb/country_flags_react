/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { toast } from 'react-toastify'

import { useEffect, useState, useTransition } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Country } from '../../../types/country'
import { getCountryInfos } from '../../../helpers/getCountryInfos'

import { getAllCountries } from '../../../services/api'

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

export const useHomeService = () => {
  const [countries, setCountries] = useState<Country[]>([])
  const [isPending, startTransition] = useTransition()
  const [loading, setLoading] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  const region = searchParams.get('region') ?? ''
  const search = searchParams.get('name') ?? ''

  const isLoading = isPending || loading

  const filterByRegion = (region: string) => {
    const params = new URLSearchParams(searchParams)

    if (region === 'clear') {
      params.delete('region')
    } else {
      params.set('region', region)
    }

    params.delete('name')
    setSearchParams(params)
  }

  const searchByCountryName = (name: string) => {
    const params = new URLSearchParams(searchParams)

    name ? params.set('name', name.toLowerCase()) : params.delete('name')
    params.delete('region')

    setSearchParams(params)
  }

  const clearSearch = () => {
    const params = new URLSearchParams(searchParams)

    params.delete('name')
    params.delete('region')
    setSearchParams(params)
  }

  const navigateToDetails = (countryName: string) => {
    navigate(`/details/${countryName.toLowerCase()}`)
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      let url = '/independent?status=true'

      if (region && region !== 'all') {
        url = `/region/${region}`
      } else if (search) {
        url = `/name/${search}`
      }

      const { error, data } = await getAllCountries(url)

      if (error) {
        toast.error(error.type)
      }

      const newData = data.map(getCountryInfos)

      startTransition(() => {
        setCountries(newData)
      })

      setLoading(false)
    }

    fetchData()
  }, [region, search])

  return {
    countries,
    isLoading,
    filterByRegion,
    searchByCountryName,
    clearSearch,
    region,
    regions,
    search,
    navigateToDetails,
  }
}
