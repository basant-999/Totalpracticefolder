import React from 'react'
import Tophead from './Component/Tophead'
import SecondTop from './Component/SecondTop'
import ThirdNav from './Component/ThirdNav'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer'

const Layout = () => {
  return (
   <>
        <Tophead/>
        <SecondTop/>
        <ThirdNav/>
        <Outlet/>
        <Footer/>
   </>
  )
}

export default Layout