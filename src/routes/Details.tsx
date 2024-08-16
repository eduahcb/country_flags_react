import { Helmet } from 'react-helmet'
import { Details as DetailsPage } from '../components/pages/Details'

export const Details = () => {
  return (
    <>
      <Helmet>
        <title>Country Details</title>
        <meta name="description" content="country details" />
      </Helmet>
      <DetailsPage />
    </>
  )
}
