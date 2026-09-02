import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumb() {
  return (
    <>
    <div className="breadcrumb">
        <div className="container">
            <div className="breadcrumb__content">
                <i className="fas fa-home breadcrumb__home-icon"></i>
                <ol>
                    <li className='breadcrumb-item'><Link to='/'>Home</Link> </li>
                    <li className='breadcrumb-item'><Link to=''>Product</Link> </li>
                </ol>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Breadcrumb
