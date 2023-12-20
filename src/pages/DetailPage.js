import React from 'react'
import { useParams } from 'react-router'
import { useGetMovieDetailQuery } from '../features/movieApi';
import VideoUi from '../components/VideoUi';

const DetailPage = () => {
  const { id } = useParams();

  const { isError, isLoading, error, data } = useGetMovieDetailQuery(id);

  return (
    <div className='p-5 space-y-5'>
      <h1>{data?.title}</h1>
      <VideoUi id={id} />
      <p>{data?.overview}</p>



    </div>
  )
}

export default DetailPage
