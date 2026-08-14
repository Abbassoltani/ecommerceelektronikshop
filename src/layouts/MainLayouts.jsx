import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

function MainLayouts() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
    <Outlet/>
    <Banner/>
      
    </div>
  )
}

export default MainLayouts
