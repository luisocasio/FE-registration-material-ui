import React from 'react'
import { NavLink } from 'react-router-dom'
import SignIn from '../components/SignIn'

const login = () => {
  return (
    <div>
      <NavLink className='button1' to='/'>
        Home
      </NavLink>
      <SignIn />;
    </div>
  )
}

export default login
