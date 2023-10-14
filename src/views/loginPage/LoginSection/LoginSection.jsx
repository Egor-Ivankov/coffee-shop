import React from 'react'

const LoginSection = () => {
  return (
    <div className='login-section'>
        <h1 className='login-section-heading'>Login</h1>
        <form className='login-section-form' onSubmit={e => e.preventDefault()}>
            <label className='login-section-form-email'>
                <span className='login-section-form-email-span'>Email</span>
                <input type='email' className='login-section-form-email-input' />
            </label>
            <label className='login-section-form-password'>
                <span className='login-section-form-password-span'>Password</span>
                <input type='password' className='login-section-form-password-input' />
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
        </form>
    </div>
  )
}

export default LoginSection