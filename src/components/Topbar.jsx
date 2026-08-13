import React from 'react'

function Topbar() {
    return (
        <>
            <div className="topbar py-2 d-none d-lg-block">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-6 ">
                            <p className="topbar-text">Get Up To 10% OFF New Season Styles, Limited Time Only</p>
                        </div>

                        <div className="col-md-6 d-flex justify-content-lg-end">
                           <div className="languge ">
                            <ul className="d-flex">
                                <li className='d-flex gap-2 dropdown position-relative'>
                                    <span className="fi fi-de"></span>
                                    <a href="#" className="nav-link dropdown-toggle" id='dropdownMent' aria-expanded='false'
                                    role='button' data-bs-toggle='dropdown'
                                    >Deutsch</a>
                                    <ul className="flag dropdown-menu position-absolute" id='dropdownMenu'>
                                        <li className="dropdown-item"><span className="fi fi-gb-eng me-2"></span> English <hr className="dropdown-divider" /></li>
                                        <li className="dropdown-item"><span className="fi fi-fr me-2"></span> Francais <hr className="dropdown-divider" /></li>
                                        <li className="dropdown-item"><span className="fi fi-es me-2"></span> Espanol <hr className="dropdown-divider" /></li>
                                        <li className="dropdown-item">  <span className="fi fi-de me-2"></span>deutsch <hr className="dropdown-divider" /></li>
                                        <li className="dropdown-item"><span className="fi fi-it me-2"></span> Italiano <hr className="dropdown-divider" /></li>
                                        <li className="dropdown-item"><span className="fi fi-pl me-2"></span> Polski <hr className="dropdown-divider" /></li>
                               
                                    </ul>
                                </li>
                            </ul>

                           </div> 
                            <span className='mx-4 '>|</span>

                            <ul className='cash' >
                                <li className="dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" id='dropdownMent' role='button' data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                    
                                    > $ USD</a>
                                    <ul className="cash dropdown-menu">
                                        <li className="dropdown-item">EUR € <hr className="dropdown-divider" /></li>
                                        <li className="dropdown-item">USD $ </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Topbar
