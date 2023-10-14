import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Profile = () => {

  const { user } = useSelector(state => state.auth);

  return (
    <div>
        <h1>Hello, {user ? user.username : '???'}</h1>
        <button onClick={() => logout()}>Logout</button>
        <br />
        <br />
        <Link to='/'>{'<--- Back to home'}</Link>
    </div>
  )
}

export default Profile