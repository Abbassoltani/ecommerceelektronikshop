import React from 'react'

function Navbar() {
    return (
        <>
            <div className="navbar-top ">
                <div className="container">
                    <div className="row w-100 justify-content-between align-items-center ">
                        <div className="col-lg-3">
                            <div className="nav-brand d-flex justify-content-center">
                                <a href="#" className="navbar-brand">SHOPIFY</a>
                            </div>
                        </div>

                        <div className="col lg-6 nav-mittel  border p-2 ">
                            <div className="row">
                                <div className="col-4 border-end">
                                    <select name="category" id="" className='form-select border-0'>

                                        <option value="">All Categories</option>
                                        <option value="">shop</option>
                                        <option value="">Cameras</option>
                                        <option value="">Charger & Cabels</option>
                                        <option value="">Laptap & Computers</option>
                                        <option value="">Phones</option>
                                        <option value="">Smart Devieces</option>
                                        <option value="">TV & Speakers</option>
                                    </select>
                                </div>
                                <div className="col-8 ">
                                    <div className="input-box position-relative overflow-hidden ">
                                        <label className='position-absolute end-0 translate-middle-y top-50  ' ><i className="ri-search-line"></i></label>
                                        <input type="text" className="form-control  border-0" placeholder='Search product hier ...' />
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="col-lg-3">
                            <div className="navbar-icon-wrapper mt-4 justify-content-center  d-flex gap-4 justify-content-center align-items-center">
                                <div className="navbar-icon-item">
                                    <i className="ri-user-line"></i>
                                </div>

                                <div className="navbar-icon-item position-relative">
                                    <i className="ri-heart-line"></i>
                                    <span className="badge position-absolute top-0 start-50 rounded-5 translate-middle-y bg-black">0</span>
                                </div>

                                <div className="navbar-icon-item position-relative ">
                                    <i className="ri-shopping-basket-line "></i>
                                    <span className="badge position-absolute top-0 start-50 rounded-5 translate-middle-y bg-black">0</span>

                                </div>

                            </div>


                        </div>

                    </div>
                </div>


            </div>


            <div className="nav navbar-expand-lg nav-menu ">
                <div className="container">


                <button className="navbar-toggler text-center w-100 "
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='toggle navigation'
                    >

                    <i className="ri-menu-line"></i>
                </button>

                <div className="navbar-collapse collapse " id='navbarNav'>
                    <div className="navbar-conter d-flex justify-content-center w-100">

                    <ul className="navbar-nav">
                        <li className="nav-item "><a href="" className="nav-link active">Home</a></li>
                        <li className="nav-item dropdown"><a href="" className="nav-link dropdown-toggle ">Shop</a></li>
                        <li className="nav-item"><a href="" className="nav-link">Categories</a></li>
                        <li className="nav-item"><a href="" className="nav-link">Products</a></li>
                        <li className="nav-item"><a href="" className="nav-link">Top Deals</a></li>
                        <li className="nav-item"><a href="" className="nav-link">Elements</a></li>
                    </ul>
                    </div>
                </div>


            </div>

                    </div>
        </>
    )
}

export default Navbar
