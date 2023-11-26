import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import About from './pages/About'
import NotFound from './pages/NotFound'


const App = () => {



  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about-page' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
