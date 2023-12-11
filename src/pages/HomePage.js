import React from 'react'
import { useSelector } from 'react-redux'


const HomePage = () => {
  const data = useSelector((state) => state.blog);
  console.log(data);

  return (
    <div>

    </div>
  )
}

export default HomePage
