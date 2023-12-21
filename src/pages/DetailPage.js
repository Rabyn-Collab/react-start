import React from 'react'
import { useParams } from 'react-router'
import { useGetMovieDetailQuery } from '../features/movieApi';
import VideoUi from '../components/VideoUi';
import { baseImage } from '../features/constants';

const DetailPage = () => {
  const { id } = useParams();

  const { isError, isLoading, error, data } = useGetMovieDetailQuery(id);

  return (
    <div className='p-5 space-y-5 text-white ' style={{ backgroundImage: `url('${baseImage}${data?.backdrop_path}')`, height: '90vh', width: '100vw', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <h1>{data?.title}</h1>
      <VideoUi id={id} />
      <p>{data?.overview}</p>



    </div>
  )
}

export default DetailPage
