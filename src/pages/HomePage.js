import React from 'react'
import { meals } from '../dummy/meal_data'

const HomePage = () => {
  return (
    <div className='p-3 grid grid-cols-3'>
      {meals.map((meal) => {
        return <div key={meal.idCategory}>
          <h1>{meal.strCategory}</h1>
          <img src={meal.strCategoryThumb} alt="" />
          <p>{meal.strCategoryDescription.substring(0, 40) + '....'}</p>
        </div>
      })}
    </div>
  )
}

export default HomePage

