

import React from 'react'

function Footer() {
    return (
        <>
            <div className="footer bg-body-secondary">
                <div className="footer-top">
                    <div className="container">
                        <div className="row align-items-center">


                            <div className="col-12 col-md-5">
                                <div className="row justify-content-center align-items-center g-1 ">
                                    <div className="col-12 col-md-2 text-center text-md-start">
                                        <span className='footer-span'><i class="bi bi-envelope-paper"></i></span>
                                    </div>
                                    <div className="col-12 col-md-10 mt-3 footer-left">
                                        <h5 className=' text-center text-md-start'>Sign up for our email update.</h5>

                                        <p className='text-center text-md-start'>Sign up for emails and unlock first access to exclusive offers, and more</p>

                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-7 px-5 ">
                                <div className="input-box position-relative">
                                    <label className="badge bg-danger position-absolute top-50 end-0 p-2 mx-2 translate-middle-y">Abonnieren</label>
                                    <input type="text" className="form-control" placeholder='Ihre E-Mail-Adresse' />
                                </div>
                                <div className="input-box d-flex align-items-center gap-3 mt-2 text-center w-100">
                                    <input type="checkbox" className='form-check-input m-0' />
                                    <label htmlFor="" className='p-0 form-check-label'> I agree to the terms and conditions and the privacy policy</label>
                                </div>


                            </div>



                        </div>



                    </div>
                </div>
                <div className="footer-bottom ">
                    <div className="container">
                        <div className="row mt-5">


                            <div className="col-12 col-md-3 part1">
                                <div className="footer-logo">
                                    TechShop
                                </div>
                                <p>Shop Default</p>
                                <span className='footer-bottom-address d-block'>76297 Stutensee, ostStraße 1</span>

                                <span className="footer-bottom-tel d-block">TEL :  +49 111 222 333</span>
                                <span className="footer-bottom-email">abbassoltani@gmail.com</span>

                                <div className="footer-part1-icon">
                                    <i class="ri-facebook-line"></i>
                                    <i class="ri-twitter-line"></i>
                                    <i class="ri-instagram-line"></i>
                                    <i class="ri-whatsapp-line"></i>
                                </div>
                            </div>


                            <div className="col-12 col-md-3 part2 ">
                                <h6>Products</h6>
                                <ul className='m-0 p-0'>
                                    <li className="text-muted">Prices drop</li>
                                    <li className="text-muted">New products</li>
                                    <li className="text-muted">Best sellers</li>
                                    <li className="text-muted">Sitemap</li>
                                    <li className="text-muted">Stores</li>
                                    <li className="text-muted">Cargers & Cables</li>
                                </ul>
                            </div>

                            <div className="col-12 col-md-3 part2 ">
                                <h6>Our Company</h6>
                                <ul className='m-0 p-0'>
                                    <li className="text-muted">Delivery</li>
                                    <li className="text-muted">Legal Notice</li>
                                    <li className="text-muted">Terms and conditions of use</li>
                                    <li className="text-muted">Secure payment</li>
                                    <li className="text-muted">Contact Us</li>
                                    <li className="text-muted">About Us</li>
                                </ul>
                            </div>

                            <div className="col-12 col-md-3 part2 ">
                                <h6>Your Account</h6>
                                <ul className='m-0 p-0'>
                                    <li className="text-muted">Order tracking</li>
                                    <li className="text-muted">Sign in</li>
                                    <li className="text-muted">Create account</li>
                                    <li className="text-muted">Credit Slips</li>
                                    <li className="text-muted">Wishlist</li>
                                    <li className="text-muted">Compare</li>
                                </ul>
                            </div>






                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
