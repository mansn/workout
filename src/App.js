import React from 'react'
import { Router, Link } from '@reach/router'
import LoginButton from './components/LoginButton/LoginButton'
import LogoutButton from './components/LogoutButton'
import { hot } from 'react-hot-loader'
import './App.css'
import Workout from './components/Workout'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { user, isAuthenticated } = useAuth0()

  return (
    <div className="App">
      <header>
        <div className="inner-header">
          <Link to="/">
            <h1>Hello, Workout! 🏋️‍♂️</h1>
          </Link>
          <div className="auth">
            <LoginButton />
            <LogoutButton />
          </div>
        </div>
      </header>
      {isAuthenticated && (
        <div className="container">
          <Router>
            <Workout user={user} path="/" />
          </Router>
        </div>
      )}
    </div>
  )
}

export default hot(module)(App)
