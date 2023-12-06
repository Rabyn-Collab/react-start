import React from 'react'
import { DiCss3, DiGithubFull, DiJava, DiJavascript, DiNodejs, DiPython, DiReact } from 'react-icons/di'
const Tech = () => {
  return (
    <div className='space-y-2'>
      <h1 className='text-center text-2xl'>Technologies I use</h1>
      <div className='grid grid-cols-4 justify-items-center'>
        <DiPython size={200} />
        <DiGithubFull className='hover:scale-150 transition-all ease-in-out  delay-150  hover:text-pink-800' size={200} />
        <DiCss3 size={200} />
        <DiJavascript size={200} />
        <DiJava className='animate-bounce' size={200} />
        <DiReact size={200} />
        <DiNodejs size={200} />

      </div>


    </div>
  )
}

export default Tech
