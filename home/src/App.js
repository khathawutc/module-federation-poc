import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navigation from './Navigation'
import localRoutes from './routes'
import remoteRoutes from 'AboutApp/routes'

const routes = [...localRoutes, ...remoteRoutes]

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1 style={{ background: 'yellow' }}>This is Home App !!!</h1>
        <Navigation />
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
    </BrowserRouter>
  )
}
export default App
