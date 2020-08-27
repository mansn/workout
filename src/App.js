import React from 'react'
import { Router, Link } from '@reach/router'
import { hot } from 'react-hot-loader'
import './App.css'
import Workout from './components/Workout'
import { useAuth0 } from '@auth0/auth0-react'
import Auth from './components/Auth/Auth'

function App() {
  const { isAuthenticated, isLoading } = useAuth0()

  const UnauthenticatedContent = () => (
    <>
      <Workout isLoading={isLoading} guestUser={true} />
    </>
  )
  const AuthenticatedContent = () => <Workout isLoading={isLoading} />

  const Content = () => (
    <div className="main">
      {isAuthenticated ? <AuthenticatedContent /> : <UnauthenticatedContent />}
    </div>
  )

  return (
    <div className="App">
      <header>
        <div className="inner-header">
          <Link to="/">
            <h1>Workout! 🏋️‍♂️</h1>
          </Link>
          <Auth />
        </div>
      </header>
      <Router>
        <Content path="/" />
      </Router>
    </div>
  )
}

export default hot(module)(App)
