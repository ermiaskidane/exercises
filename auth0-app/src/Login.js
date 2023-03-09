import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  console.log('Login', isAuthenticated)
  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()}>Log In</button>
    )
  )
}

export default Login
