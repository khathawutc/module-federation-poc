import React from 'react'

const AboutPage = React.lazy(() => import('./AboutPage'))

const routes = [
  {
    key: 'about',
    path: '/about',
    component: <AboutPage />,
    exact: true,
  },
]

export default routes
