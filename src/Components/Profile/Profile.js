import React from 'react'
import { useContext } from 'react';
import { LoginContext } from '../LoginContext/LoginContext';

function Profile() {
    const {username,email} = useContext(LoginContext);
  return (
    <div>
        <h1>{username}</h1>
        <h1>{email}</h1>
    </div>
  )
}

export default Profile