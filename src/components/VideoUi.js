import React from 'react'
import { useGetMovieVideoQuery } from '../features/movieApi'

const VideoUi = ({ id }) => {

  const { isError, isLoading, data, error } = useGetMovieVideoQuery(id);
  console.log(data);
  return (
    <div>

    </div>
  )
}

export default VideoUi
