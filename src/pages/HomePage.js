import React from 'react'
import { useSelector } from 'react-redux'
import CardUi from '../components/CardUi';


const HomePage = () => {
  const { blogs } = useSelector((store) => store.blog);

  return (
    <div className='p-4 grid grid-cols-3 gap-5 items-start'>
      {blogs && blogs.map((blog, index) => {
        return <CardUi key={blog.id} i={index} blog={blog} />
      })}
    </div>
  )
}

export default HomePage
