import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black text-white flex justify-between items-baseline px-4 py-2'>
      <h1 className='text-2xl'>Logo</h1>
      <nav className='space-x-5'>
        <NavLink to='/about-page' >About</NavLink>
        <NavLink to='/'>Contact</NavLink>

      </nav>

    </div>
  )
}

export default Header
