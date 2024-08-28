import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'

import { Home } from './routes/Home'
import { Details } from './routes/Details'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: `/details/:name`,
        element: <Details />,
      },
      {
        path: '*',
        element: <div>not found</div>,
      },
    ],
  },
])

export const Router = () => <RouterProvider router={router} />
