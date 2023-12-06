import React from 'react'

const Footer = () => {
  return (
    <div className='relative w-full '>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,69.3C672,64,768,96,864,128C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <div className='absolute top-[60%] right-[40%] text-center text-pink-950 font-bold'>
        <h1>Develop By</h1>
        <h1 className=''>Some One Anonymous</h1>
      </div>



    </div>
  )
}

export default Footer
