import React, { useState } from 'react'
import './loginSection.scss'
import { useDispatch } from 'react-redux';
import { loginThunk } from '@redux/features/auth/authSlice'

const LoginSection = () => {
    
const [username, setEmail] = useState('');
const [password, setPassword] = useState('');
const dispatch = useDispatch();

const handleSubmit = () => {
    try {
        dispatch(loginThunk({username, password}));
    } catch (e) {
        console.log(e);
    }
}

  return (
    <section className='login-section'>
        <h1 className='login-section-heading'>Login</h1>
        <form className='login-section-form' onSubmit={e => e.preventDefault()}>
            <label className='login-section-form-email'>
                <span className='login-section-form-email-span'>Email</span>
                <input 
                onChange={e => setEmail(e.target.value)}
                value={username} 
                placeholder='Type your email' 
                type='text'
                className='login-section-form-email-input' 
                />
            </label>
            <label className='login-section-form-password'>
                <span className='login-section-form-password-span'>Password</span>
                <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                placeholder='Type your password'
                type='password'
                className='login-section-form-password-input'
                />
            </label>

            <div className='login-section-form-forgot'>
                <label className="login-section-form-forgot-remember">
                    <input className="login-section-form-forgot-remember-checkbox" type="checkbox" />
                    <span className="login-section-form-forgot-remember-span">Remember me</span>
                </label>
                <a href='/' className="login-section-form-forgot-password">
                    Forgot Password?
                </a>
            </div>

            <button onClick={() => handleSubmit()} type='submit' className='login-section-form-button'>Log in</button>
            <hr className='login-section-form-hr'/>

            <div className='login-section-form-register'>
                <p className='login-section-form-register-p'>Or</p>
                <button className='login-section-form-register-button'>Create new account</button>
            </div>
        </form>
    </section>
  )
}

export default LoginSection