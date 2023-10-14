import React from 'react'
import './registerSection.scss'
import bgr from '@assets/img/login-back.jpg'

const RegisterSection = () => {
  return (
    <div className='register-section'>
      <img className='register-section-img' src={bgr} alt='background' />
    </div>
  )
}

export default RegisterSection