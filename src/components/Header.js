import React from 'react'
import { NavLink } from 'react-router-dom'

const person = {
  name: 'ram',
  age: 90
};


const { name, age } = person;

const Header = () => {
  return (
    <div className='bg-black text-white flex justify-between items-baseline px-4 py-2'>
      <h1 className='text-2xl'>Logo</h1>
      <nav className='space-x-5'>
        <NavLink className={
          (n) => {
            const { isActive } = n;
            return isActive === true ? 'text-pink-700' : 'text-white';
          }
        } to='/about-page' >About</NavLink>
        <NavLink to='/not'>Contact</NavLink>

      </nav>

    </div>
  )
}

export default Header



