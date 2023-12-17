import React from 'react'
import { useGetMovieByCategoryQuery } from '../features/movieApi'
import { useParams } from 'react-router';
import { baseImage } from '../features/constants';

const Category = () => {
  const { category } = useParams();

  const { isLoading, isError, data, error } = useGetMovieByCategoryQuery(category ?? 'now_playing');

  if (isLoading) {

  }

  if (isError) {

  }


  return (
    <div className='grid grid-cols-4 p-4 gap-4 items-start'>
      {data && data.results.map((movie) => {
        return <div key={movie.id} className='space-y-2'>

          <img className='rounded-md' src={`${baseImage}${movie.poster_path}`} alt="" />
          <h1 className='font-semibold'>{movie.title}</h1>

        </div>
      })}

    </div>
  )
}

export default Category
