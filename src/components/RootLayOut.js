import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'

const RootLayOut = () => {
  return (
    <>
      <Header />
      <Outlet />

    </>
  )
}

export default RootLayOut
