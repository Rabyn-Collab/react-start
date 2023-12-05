import React from 'react'

const Display = () => {
  return (
    <div className='grid grid-cols-2 items-center'>

      <div className="ani h-[400px]">
        <dotlottie-player src="https://lottie.host/fdcd7df3-0c72-43f0-8346-12bebd56c714/JwyRbDNvNA.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
      </div>

      <div className="info space-y-2">
        <h1 className='font-bold text-2xl'>Hi, I am John </h1>
        <p className='text-purple-700 italic'>Some Dev, Freelancer, Rounder</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quos optio incidunt. Ab sapiente dolorem nam aut a deleniti quas magnam! Doloribus debitis modi quod fuga dicta reprehenderit, cum laborum dolor sapiente sed delectus aspernatur eius sint itaque rerum aut perspiciatis rem quisquam, voluptatibus labore mollitia sit. Eaque, explicabo quam!</p>
      </div>

    </div>
  )
}

export default Display
