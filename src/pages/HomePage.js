import React from 'react'
import { useSelector } from 'react-redux'


const HomePage = () => {
  const data = useSelector((state) => state.blog);
  const dat = useSelector((state) => state);
  console.log(dat);
  console.log(data);

  return (
    <div>
      {data && data.map((d,) => {
        return <h1 key={d.id}>{d.title}</h1>
      })}
    </div>
  )
}

export default HomePage
