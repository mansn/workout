import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styles from './LoginButton.module.css'

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  return !isAuthenticated && <button className={styles.loginBtn} onClick={() => loginWithRedirect()}>Log In</button>
}

export default LoginButton
