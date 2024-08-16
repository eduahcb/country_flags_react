/* eslint-disable @typescript-eslint/no-explicit-any */
import { Country } from '../types/country'

export const getCountryInfos = (country: any): Country => {
  return {
    name: {
      common: country.name.common,
      native: country.name.nativeName
        ? Object.values<any>(country.name.nativeName)[0].common
        : '',
    },
    capital: country.capital,
    flag: {
      src: country.flags.svg,
      alt: country.flags?.alt ?? '',
    },
    population: Number(country.population).toLocaleString('pt-BR'),
    region: country.region,
    subregion: country.subregion ?? '',
    tld: country.tld,
    currencies: country?.currencies ? Object.keys(country.currencies) : [],
    languages: country?.languages ? Object.values<any>(country.languages) : [],
    borders: country?.borders ? Object.values<any>(country.borders) : [],
  }
}
