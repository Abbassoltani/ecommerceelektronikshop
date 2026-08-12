import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/Topbar'

function MainLayouts() {
  return (
    <div>
      <Topbar/>
    <Outlet/>
      
    </div>
  )
}

export default MainLayouts
