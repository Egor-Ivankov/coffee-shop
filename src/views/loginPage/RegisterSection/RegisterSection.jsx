import React, { useState } from 'react'
import './registerSection.scss'

const RegisterSection = ({handleMoveBackground}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  return (
    <div className='register-section'>
      <h1 className='register-section-heading'>Sign Up</h1>
        <form className='register-section-form' onSubmit={e => e.preventDefault()}>
          <label className='register-section-form-firstname'>
                <span className='register-section-form-email-span'>First name</span>
                <input 
                onChange={e => setEmail(e.target.value)}
                value={firstname} 
                type='text'
                className='register-section-form-email-input' 
                />
            </label>
          <label className='register-section-form-lastname'>
                <span className='register-section-form-email-span'>Name</span>
                <input 
                onChange={e => setEmail(e.target.value)}
                value={lastname} 
                placeholder='First name' 
                type='text'
                className='register-section-form-email-input' 
                />
            </label>
            <label className='register-section-form-email'>
                <span className='register-section-form-email-span'>Email</span>
                <input 
                onChange={e => setEmail(e.target.value)}
                value={email} 
                placeholder='Type your email' 
                type='text'
                className='register-section-form-email-input' 
                />
            </label>
            <label className='register-section-form-password'>
                <span className='register-section-form-password-span'>Password</span>
                <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                placeholder='Type your password'
                type='password'
                className='register-section-form-password-input'
                />
            </label>

            <button onClick={() => handleSubmit()} type='submit' className='register-section-form-button'>Create account</button>
            <hr className='register-section-form-hr'/>

            <div className='register-section-form-register'>
                <p className='register-section-form-register-p'>Already in?</p>
                <button onClick={() => handleMoveBackground()} className='register-section-form-register-button'>Log in</button>
            </div>
        </form>
    </div>
  )
}

export default RegisterSection