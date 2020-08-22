import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../LoginButton/LoginButton'
import LogoutButton from '../LogoutButton/LogoutButton'

const Auth = () => {
  const { isAuthenticated } = useAuth0()

  return !isAuthenticated ? <LoginButton /> : <LogoutButton />
}

export default Auth
