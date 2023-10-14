import React from 'react'
import { LoginSection, RegisterSection } from '../views/loginPage';
import '@components/styles/index.scss'

const Login = () => {
  return (
    <div className='login-page'>
      <LoginSection />
      <RegisterSection />
    </div>
  )
}

export default Login