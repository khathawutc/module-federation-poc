import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import localRoutes from './routes'
import mainRoutes from 'HomeApp/MainRoutes'

const Navigation = React.lazy(() => import('HomeApp/Navigation'))

const routes = [...localRoutes, ...mainRoutes]

export const App = () => (
  <Router>
    <div>
      <h1 style={{ background: 'red' }}>This is About App !!!</h1>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Navigation />
      </React.Suspense>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={route.component}
              exact={true}
            />
          ))}
        </Routes>
      </React.Suspense>
    </div>
  </Router>
)
export default App
