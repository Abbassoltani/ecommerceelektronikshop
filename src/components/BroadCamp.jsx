import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumb({page}) {
  return (
    <>
    <div className="breadcrumb m-0">
        <div className="container">
            <div className="breadcrumb__content">
                <i className="fas fa-home breadcrumb__home-icon"></i>
                <ol>
                    <li className='breadcrumb-item'><Link to='/'>Home</Link> </li>
                    <li className='breadcrumb-item'><Link to=''>{page}</Link> </li>
                </ol>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Breadcrumb
