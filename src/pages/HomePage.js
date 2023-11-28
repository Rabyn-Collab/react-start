import React from 'react'
import { meals } from '../dummy/meal_data'
import { useNavigate } from 'react-router'

const HomePage = () => {
  const nav = useNavigate();
  return (
    <div className='p-3 grid grid-cols-3 gap-4'>
      {meals.map((meal) => {
        return <div onClick={() => nav(`/detail/${meal.idCategory}`, { state: meal })} className='cursor-pointer' key={meal.idCategory}>
          <h1>{meal.strCategory}</h1>
          <img src={meal.strCategoryThumb} alt="" />
          <p>{meal.strCategoryDescription.substring(0, 40) + '....'}</p>
        </div>
      })}



    </div>
  )
}

export default HomePage

