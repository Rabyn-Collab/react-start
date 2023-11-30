import React, { useState } from 'react'
import Contact from './Contact';

const HomePage = () => {
  const [data, setData] = useState([]);


  const addSome = (obj) => {
    setData([...data, obj]);
  }

  const remove = (index) => {
    data.splice(index, 1);
    setData([...data]);
  }


  return (
    <div>
      <Contact addSome={addSome} />

      {data.map((post, i) => {
        return <div key={i} className='shadow-lg max-w-xs p-4 flex items-baseline justify-between'>
          <div>
            <h1 className='font-bold'>{post.title}</h1>
            <p>{post.detail}</p>
          </div>
          <button onClick={() => remove(i)}>
            <i className="fa-solid fa-trash"></i>
          </button>

        </div>
      })}

    </div>
  )
}

export default HomePage
