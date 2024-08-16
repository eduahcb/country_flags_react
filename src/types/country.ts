export type Country = {
  name: {
    common: string
    native: string
  }
  capital: string[]
  flag: {
    src: string
    alt: string
  }
  population: string
  region: string
  subregion: string
  tld: string[]
  currencies: string[]
  languages: string[]
  borders: string[]
}
