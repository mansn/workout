import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styles from './LoginButton.module.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <button
      className={[styles.loginBtn, styles.dangle].join(' ')}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  )
}

export default LoginButton
