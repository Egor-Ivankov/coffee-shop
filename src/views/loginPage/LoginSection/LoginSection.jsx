import React from 'react'
import './loginSection.scss'

const LoginSection = () => {
  return (
    <section className='login-section'>
        <h1 className='login-section-heading'>Login</h1>
        <form className='login-section-form' onSubmit={e => e.preventDefault()}>
            <label className='login-section-form-email'>
                <span className='login-section-form-email-span'>Email</span>
                <input placeholder='Type your email' type='email' className='login-section-form-email-input' />
            </label>
            <label className='login-section-form-password'>
                <span className='login-section-form-password-span'>Password</span>
                <input placeholder='Type your password' type='password' className='login-section-form-password-input' />
            </label>

            <div className='login-section-form-forgot'>
                <label className="login-section-form-forgot-remember">
                    <input className="login-section-form-forgot-remember-checkbox" type="checkbox" />
                    <span className="login-section-form-forgot-remember-span">Remember me</span>
                </label>
                <a href='/forgot-password' className="login-section-form-forgot-password">
                    Forgot Password?
                </a>
            </div>

            <button type='submit' className='login-section-form-button'>Log in</button>
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