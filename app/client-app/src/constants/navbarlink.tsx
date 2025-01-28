import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarLink = ({ info, to }) => {
  return (
    <NavLink to={to} className='text-gray-700 hover:text-blue-500 transition duration-300'>
      {info}
    </NavLink>
  )
}

export default NavbarLink
