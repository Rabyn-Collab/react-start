import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const [show, setShow] = useState(false);

  const navMenu = [
    { path: '/about-page', name: 'About' },
    { path: '/contact-page', name: 'Contact' },
  ];


  return (
    <div className='bg-black text-white flex justify-between items-baseline px-4 py-2'>
      <div className='flex flex-col space-y-1'>
        <h1 className='text-2xl'>Logo</h1>
        {show && <div className='sm:flex flex-col hidden '>
          {navMenu.map((nav, i) => {
            return <NavLink key={i} to={nav.path}>{nav.name}</NavLink>
          })}
        </div>
        }

      </div>


      <button onClick={() => setShow(!show)} className='hidden sm:flex'> {show ? <i className="fa-solid fa-xmark fa-lg"></i> : <i className="fa-solid fa-bars fa-lg"></i>}</button>

      <nav className='space-x-5 sm:hidden'>

        {navMenu.map((nav, i) => {
          return <NavLink key={i} to={nav.path}>{nav.name}</NavLink>
        })}


        {/* <NavLink className={
          (n) => {
            const { isActive } = n;
            return isActive === true ? 'text-pink-700' : 'text-white';
          }
        } to='/about-page' >About</NavLink>
        <NavLink to='/contact-page'>Contact</NavLink> */}

      </nav>

    </div>
  )
}

export default Header



