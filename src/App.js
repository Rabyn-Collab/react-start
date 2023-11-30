import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import About from './pages/About'
import NotFound from './pages/NotFound'
import RootLayOut from './components/RootLayOut'
import DetailPage from './pages/DetailPage'
import Contact from './pages/Contact'


const App = () => {


  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayOut />} >
          <Route index element={<HomePage />} />
          <Route path='detail/:id' element={<DetailPage />} />
          <Route path='contact-page' element={<Contact />} />
          <Route path='about-page' element={<About />} />
          <Route path='*' element={<NotFound />} />

        </Route>

      </Routes>
    </>
  )
}

export default App
