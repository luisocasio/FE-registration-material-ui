import React from 'react'
import { NavLink } from 'react-router-dom'

const landing = () => {
  return (
    <div>
      <div className='slogan'>
        Welcome to QuickSt. Farmers market goods you love, delivered to your
        door.
      </div>

      <NavLink className='button2' to='/register'>
        register
      </NavLink>
      <br></br>
      <NavLink className='button3' to='/login'>
        login
      </NavLink>
    </div>
  )
}

export default landing
