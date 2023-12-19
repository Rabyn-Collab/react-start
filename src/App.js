import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import RootLayOut from './components/RootLayOut'
import Category from './components/Category'
import SearchPage from './pages/SearchPage'
import DetailPage from './pages/DetailPage'
const App = () => {


  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayOut />} >
          <Route index element={<HomePage />} />
          <Route path='movieCategory/:category' element={<Category />} />
          <Route path='movieSearch/:search' element={<SearchPage />} />
          <Route path='movieDetail/:id' element={<DetailPage />} />
          <Route path='*' element={<NotFound />} />

        </Route>

      </Routes>
    </>
  )
}

export default App
