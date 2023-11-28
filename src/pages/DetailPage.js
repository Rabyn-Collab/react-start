import React from 'react'
import { useLocation } from 'react-router'

const DetailPage = () => {

  const { state } = useLocation();

  const m = state.url.split('=');

  return (
    <div className='p-3 space-y-4'>

      <h1>{state.strCategory}</h1>
      <iframe className="w-full aspect-video" src={`https://www.youtube.com/embed/${m[1]}`} ></iframe>


      <img src={state.strCategoryThumb} alt="" />
      <p>{state.strCategoryDescription}</p>



    </div>
  )
}

export default DetailPage
