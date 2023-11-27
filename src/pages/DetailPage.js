import React from 'react'
import { useParams } from 'react-router'

const DetailPage = () => {

  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>This is Detail Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur incidunt vitae rerum eveniet excepturi dolorum odio porro adipisci reprehenderit in.</p>

    </div>
  )
}

export default DetailPage
