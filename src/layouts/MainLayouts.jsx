import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function MainLayouts() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
    <Outlet/>
      <Footer/>
      
    </div>
  )
}

export default MainLayouts
