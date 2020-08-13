import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <Auth0Provider
    domain="workout-auth.eu.auth0.com"
    clientId="fPulZWKSGGSAkDJBjUE1y1B7Je1MFkuL"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
)
