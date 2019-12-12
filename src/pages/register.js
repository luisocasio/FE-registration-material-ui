import React from 'react';
import { NavLink } from 'react-router-dom';
import SignUp from '../components/SignUp';

const register = () => {
  return (
    <div>
      <NavLink className='button1' to='/'>
        Home
      </NavLink>
      <SignUp />
    </div>
  );
};

export default register;
