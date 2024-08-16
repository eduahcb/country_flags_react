export async function getAllCountries(url: string) {
  let error = undefined

  const response = await fetch(`https://restcountries.com/v3.1${url}`)

  if (!response.ok && response.status === 404) {
    error = {
      type: 'Not Found',
      status: response.status,
    }
  } else if (!response.ok) {
    error = {
      type: 'Internal Server error',
      status: response.status,
    }
  }

  const countries = await response.json()

  return {
    data: Array.isArray(countries) ? countries : [],
    error,
  }
}

export async function getCountry(name: string) {
  let error = undefined

  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)

  if (!response.ok && response.status === 404) {
    error = {
      type: 'Not Found',
      status: response.status,
    }
  } else if (!response.ok) {
    error = {
      type: 'Internal Server error',
      status: response.status,
    }
  }

  const countries = await response.json()

  return {
    data: Array.isArray(countries) ? countries[0] : undefined,
    error,
  }
}
