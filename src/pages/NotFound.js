import React from 'react'
import { useNavigate } from 'react-router'


const NotFound = () => {

  const nav = useNavigate();




  return (
    <div>

      <div className='h-[370px]'>
        <dotlottie-player src="https://lottie.host/a68bf31d-f9bf-41c7-987f-9a9fd8ec848f/wW3OYySdTE.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
      </div>
      <div className='text-center'>
        <h1>Oops Something went wrong</h1>
        <p>Page not Found</p>
        <button onClick={() => nav(-1)}>Go To Back Page</button>

      </div>


    </div >
  )
}

export default NotFound

