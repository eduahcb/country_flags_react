import { Home as HomePage } from '../components/pages/Home'

import { Helmet } from 'react-helmet'

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Rest Countries React SPA</title>
        <meta name="description" content="show all countries" />
      </Helmet>
      <HomePage />
    </>
  )
}
