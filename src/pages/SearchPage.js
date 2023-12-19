import React from 'react'
import { useGetSearchMovieQuery } from '../features/movieApi'
import { useParams } from 'react-router';
import { baseImage } from '../features/constants';

const SearchPage = () => {
  const { search } = useParams();
  const { isLoading, data, error, isError } = useGetSearchMovieQuery(search ?? 'perfume');



  return (
    <>
      {data && data.results.length > 0 ? <div className='grid grid-cols-4 p-4 gap-4 items-start'>
        {data.results.map((movie) => {
          return <div key={movie.id} className='space-y-2'>

            <img className='rounded-md' src={`${baseImage}${movie.poster_path}`} alt="" />
            <h1 className='font-semibold'>{movie.title}</h1>

          </div>
        })}

      </div> : <h1>Try Using Another keyword</h1>}
    </>
  )
}

export default SearchPage
