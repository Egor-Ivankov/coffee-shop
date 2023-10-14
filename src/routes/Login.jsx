import React, {useState, useEffect} from 'react'
import { LoginSection, RegisterSection } from '../views/loginPage';
import '@components/styles/index.scss'
import { useDispatch, useSelector } from 'react-redux';
import { checkIsAuth, loginThunk } from '@redux/features/auth/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

const navigate = useNavigate();

const isAuth = useSelector(checkIsAuth);
const { status } = useSelector((state) => state.auth)

  useEffect(() => {
      if (status) toast(status);
      if (isAuth) navigate('/');
  }, [status, isAuth, navigate])


  return (
    <div className='login-page'>
      <ToastContainer />
      <LoginSection />
      <RegisterSection />
    </div>
  )
}

export default Login