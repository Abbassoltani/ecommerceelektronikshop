import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

import ProductsCard from '../components/ProductsCard'

function MainLayouts() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
    <Outlet/>
    <Banner/>
    <ProductsCard/>
      
    </div>
  )
}

export default MainLayouts
