import React from 'react'
import { useParams } from 'react-router'
import { useGetMovieDetailQuery } from '../features/movieApi';
import VideoUi from '../components/VideoUi';

const DetailPage = () => {
  const { id } = useParams();

  const { isError, isLoading, error, data } = useGetMovieDetailQuery(id);
  console.log(data);
  return (
    <div>

      <VideoUi id={id} />


    </div>
  )
}

export default DetailPage
