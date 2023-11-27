import React from 'react'
import { useNavigate } from 'react-router'


const HomePage = () => {
  const n = () => {

  }
  const nav = useNavigate();

  return (
    <div>
      <button onClick={() => nav('/detail/abddh13784')}>Go To Detail</button>
      <h1>This is a Home Page</h1>

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ut itaque mollitia iure repudiandae labore ex soluta, distinctio unde voluptates ipsam, neque temporibus modi, accusamus laboriosam inventore illo tempore? Est quos velit pariatur odio. Modi, repellat eaque. Nesciunt blanditiis earum autem! Quam nulla tenetur ducimus iure, velit architecto vitae? Porro!</p>
    </div>
  )
}

export default HomePage
