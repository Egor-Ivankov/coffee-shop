import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '@redux/features/auth/authSlice'
import { toast, ToastContainer } from 'react-toastify';

const Profile = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(state => state.auth);

  const logoutHandler = () => {
    if (user) {
      dispatch(logout());
      window.localStorage.removeItem('token');
      toast("Вы вышли из системы!");
      setTimeout(() => navigate('/'), 2000)
    }
  }

  return (
    <div>
        <h1>Hello, {user ? user.username : '???'}</h1>
        <button onClick={() => logoutHandler()}>Logout</button>
        <br />
        <br />
        <Link to='/'>{'<--- Back to home'}</Link>
        <ToastContainer />
    </div>
  )
}

export default Profile