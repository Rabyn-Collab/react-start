import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {

  Button,
  Input,
} from "@material-tailwind/react";
import { useFormik } from 'formik';


const Header = () => {

  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      search: ''
    },
    onSubmit: (val) => {
      nav(`/movieSearch/${val.search}`);
    }
  });

  return (
    <div className='bg-black text-white flex justify-between items-center px-4 py-3 sticky top-0'>



      <NavLink to={'/'} replace={true}> <h1 className='text-2xl'>Movie TMDB</h1></NavLink>




      <nav className='space-x-5 flex items-baseline'>
        <NavLink className={
          (n) => {
            const { isActive } = n;
            return isActive === true ? 'text-pink-700' : 'text-white';
          }
        } to='/movieCategory/popular' >Popular</NavLink>
        <NavLink to='/movieCategory/top_rated'>Top-Rated</NavLink>
        <NavLink to='/movieCategory/upcoming'>Upcoming</NavLink>
        <form onSubmit={formik.handleSubmit}>
          <div className="relative  flex  gap-2 ">

            <Input
              name='search'
              value={formik.values.search}
              onChange={formik.handleChange}
              type="search"
              color="white"
              label="Type here..."
              className="pr-20"
            />
            <Button
              type='submit'
              size="sm"
              color="white"
              className="!absolute right-1 top-1 rounded "
            >
              Search
            </Button>
          </div>
        </form>

      </nav>

    </div>
  )
}

export default Header



