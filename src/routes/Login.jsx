import React, {useEffect, useState} from 'react'
import { LoginSection, RegisterSection } from '../views/loginPage';
import '@components/styles/index.scss'
import { useSelector } from 'react-redux';
import { checkIsAuth } from '@redux/features/auth/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import bgr from '@assets/img/login-back.jpg'


const Login = () => {

  const navigate = useNavigate();

  const isAuth = useSelector(checkIsAuth);
  const {status} = useSelector((state) => state.auth)
  console.log(status)

  useEffect(() => {
      if (status !== 'unauthorized token') {
        toast(status);
      } 
      if (isAuth) {
        setTimeout(() => navigate('/'), 1000)
      }
  }, [status, isAuth])

  const [regBackground, setRegBackground] = useState('login-page-background')

    
  const handleMoveBackground = () => {
    (regBackground === 'login-page-background' || regBackground === 'login-page-background-moveout')
    ?
    setRegBackground('login-page-background-movein')
    :
    setRegBackground('login-page-background-moveout')
  }
  

  return (
    <div className='login-page'>
      <ToastContainer />
      <img className={regBackground} src={bgr} alt='background' />
      <LoginSection regBackground={regBackground} handleMoveBackground={handleMoveBackground} />
      <RegisterSection handleMoveBackground={handleMoveBackground} />
    </div>
  )
}

export default Login