import React from 'react'
import { useGetMovieByCategoryQuery } from '../features/movieApi'
import { useNavigate, useParams } from 'react-router';
import { baseImage } from '../features/constants';

const Category = () => {
  const { category } = useParams();
  const nav = useNavigate();

  const { isLoading, isError, data, error } = useGetMovieByCategoryQuery(category ?? 'now_playing');

  if (isLoading) {
    return <div className='h-[400px]'>
      <dotlottie-player src="https://lottie.host/01986b4b-7629-473a-8223-f06d23ec4120/LelU3WnIJp.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
    </div>
  }

  if (isError) {

  }


  return (
    <div className='grid grid-cols-4 p-4 gap-4 items-start'>
      {data && data.results.map((movie) => {
        return <div onClick={() => nav(`/movieDetail/${movie.id}`)} key={movie.id} className='space-y-2 cursor-pointer'>
          <img className='rounded-md' src={`${baseImage}${movie.poster_path}`} alt="" />
          <h1 className='font-semibold'>{movie.title}</h1>

        </div>
      })}

    </div>
  )
}

export default Category
