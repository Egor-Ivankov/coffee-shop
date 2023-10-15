import React, { useEffect, useState } from 'react'
import './registerSection.scss'
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from '@redux/features/auth/authSlice';

const RegisterSection = ({handleMoveBackground}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const dispatch = useDispatch();
  
  const handleSubmit = () => {
    try {
      dispatch(registerThunk({email, password, firstname, lastname}));
      setEmail('');
      setPassword('');
      setFirstname('');
      setLastname('');
    } catch(error) {
      console.log(error);
    }
    
  }

  return (
    <div className='register-section'>
      <h1 className='register-section-heading'>Sign Up</h1>
        <form className='register-section-form' onSubmit={e => e.preventDefault()}>
          <label className='register-section-form-firstname'>
                <span className='register-section-form-firstname-span'>First name</span>
                <input 
                onChange={e => setFirstname(e.target.value)}
                value={firstname} 
                type='text'
                className='register-section-form-firstname-input'
                />
            </label>
          <label className='register-section-form-lastname'>
                <span className='register-section-form-lastname-span'>Last Name</span>
                <input 
                onChange={e => setLastname(e.target.value)}
                value={lastname} 
                type='text'
                className='register-section-form-lastname-input'
                />
            </label>
            <label className='register-section-form-email'>
                <span className='register-section-form-email-span'>Email</span>
                <input 
                onChange={e => setEmail(e.target.value)}
                value={email} 
                type='email'
                className='register-section-form-email-input'
                />
            </label>
            <label className='register-section-form-password'>
                <span className='register-section-form-password-span'>Password</span>
                <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type='password'
                className='register-section-form-password-input'
                />
            </label>

            <label className="register-section-form-remember">
                    <input className="register-section-form-remember-checkbox" type="checkbox" />
                    <span className="register-section-form-remember-span">Remember me</span>
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