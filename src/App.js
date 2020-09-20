import React from 'react'
import { Router, Link } from '@reach/router'
import { hot } from 'react-hot-loader'
import './App.css'
import WorkoutProgram from './components/WorkoutProgram/WorkoutProgram'
import { useAuth0 } from '@auth0/auth0-react'
import Auth from './components/Auth/Auth'
import styles from './App.module.css'

function App() {
  const { isAuthenticated, isLoading } = useAuth0()

  const UnauthenticatedContent = () => (
    <>
      <WorkoutProgram isLoading={isLoading} guestUser={true} />
    </>
  )
  const AuthenticatedContent = () => <WorkoutProgram isLoading={isLoading} />

  const Content = () => (
    <div className={styles.main}>
      {isAuthenticated ? <AuthenticatedContent /> : <UnauthenticatedContent />}
    </div>
  )

  const Header = ({ children }) => <header className={styles.header}>{children}</header>

  return (
    <div className={styles.app}>
      <Header>
        <Link to="/">
          <h1>Workout! 🏋️‍♂️</h1>
        </Link>
        <Auth />
      </Header>
      <Router>
        <Content path="/" />
      </Router>
    </div>
  )
}

export default hot(module)(App)
