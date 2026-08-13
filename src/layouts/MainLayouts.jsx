import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'

function MainLayouts() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
    <Outlet/>
      
    </div>
  )
}

export default MainLayouts
