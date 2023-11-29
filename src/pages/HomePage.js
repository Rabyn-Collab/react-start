import React, { useState } from 'react'
import Sample from './Sample';
import { movie } from '../dummy/movie_data';

const HomePage = () => {

  const [count, setCount] = useState(0);


  const addTo = () => {
    setCount((prev) => prev + 1);
  }

  const minusTo = () => {
    setCount((prev) => prev - 1);
  }
  const movieData = movie;

  const m = {
    ji: 90
  };
  return (
    <div className='p-5'>

      <h1>{count}</h1>


      <Sample some={900} add={addTo} />
    </div>
  )
}

export default HomePage
