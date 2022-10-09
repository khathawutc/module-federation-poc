import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import localRoutes from './routes'
import mainRoutes from 'Remote/MainRoutes'

const RemoteApp = React.lazy(() => import('Remote/App'))
const Navigation = React.lazy(() => import('Remote/Navigation'))

const routes = [...localRoutes, ...mainRoutes]

const RemoteWrapper = ({ children }) => (
  <div
    style={{
      border: '1px solid red',
      background: 'white',
    }}
  >
    {/* <ErrorBoundary>{children}</ErrorBoundary> */}
    {children}
  </div>
)

export const App = () => (
  <Router>
    <div style={{ background: 'rgba(43, 192, 219, 0.3)' }}>
      <h1>This is the Host!</h1>
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
      {/* <h2>Remote App:</h2>
    <RemoteWrapper>
      <RemoteApp />
    </RemoteWrapper>
    <h2>Remote Button:</h2>
    <RemoteWrapper>
      <RemoteButton />
    </RemoteWrapper>
    <br />
    <a href="http://localhost:4000">Link to Remote App</a> */}
    </div>
  </Router>
)
export default App
