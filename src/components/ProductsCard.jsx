import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

function ProductsCard() {
    return (
        <>
            <div className="product-card py-4">
                <div className="container">
                    <div className="row g-4">

                        {/* left */}
                        <div className="col-12 col-md-3 ">
                            <div className="product-img h-100">
                                <img src="./../../public/assets/productcard1.jpg" alt="" className="img-fluid h-100"
                                    style={{ objectFit: 'cover' }} />
                            </div>

                        </div>

                        {/* right  */}
                        <div className="col-12 col-md-9 d-flex flex-column justify-content-between">
                            <div className="product-category d-flex justify-content-center border-bottom">
                                <ul className="d-flex justify-content-between gap-5">
                                    <li>Home</li>
                                    <li>Home</li>
                                    <li>Home</li>
                                </ul>
                            </div>

                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={10}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false
                                }}
                          breakpoints={{
    576: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 }
}}
                                className='w-100'
                            >

                                <SwiperSlide>


                                    <div className="card my-2">
                                        <img src="./../../public/assets/productcard2.png" alt="" className='card-img-top' style={{ objectFit: 'contain', height: '180px' }} />
                                        <div className="card-body">
                                            <span className="card-title">iPhone 11</span>
                                            <h3>Lorem ipsum dolor sit amet.</h3>
                                            <button className="btn btn-success">Shop me</button>
                                        </div>
                                    </div>

                                </SwiperSlide>


                                <SwiperSlide>


                                    <div className="card my-2">
                                        <img src="./../../public/assets/productcard3.png" alt="" className='card-img-top' style={{ objectFit: 'contain', height: '180px' }} />
                                        <div className="card-body">
                                            <span className="card-title">iPhone 11</span>
                                            <h3>Lorem ipsum dolor sit amet.</h3>
                                            <button className="btn btn-success">Shop me</button>
                                        </div>
                                    </div>

                                </SwiperSlide>


                                <SwiperSlide>


                                    <div className="card my-2">
                                        <img src="./../../public/assets/productcard4.png" alt="" className='card-img-top' style={{ objectFit: 'contain', height: '180px' }} />
                                        <div className="card-body">
                                            <span className="card-title">iPhone 11</span>
                                            <h3>Lorem ipsum dolor sit amet.</h3>
                                            <button className="btn btn-success">Shop me</button>
                                        </div>
                                    </div>

                                </SwiperSlide>

                                
                                <SwiperSlide>


                                    <div className="card my-2">
                                        <img src="./../../public/assets/productcard5.png" alt="" className='card-img-top' style={{ objectFit: 'contain', height: '180px' }} />
                                        <div className="card-body">
                                            <span className="card-title">iPhone 11</span>
                                            <h3>Lorem ipsum dolor sit amet.</h3>
                                            <button className="btn btn-success">Shop me</button>
                                        </div>
                                    </div>

                                </SwiperSlide>

                                
                                <SwiperSlide>


                                    <div className="card my-2">
                                        <img src="./../../public/assets/productcard6.png" alt="" className='card-img-top' style={{ objectFit: 'contain', height: '180px' }} />
                                        <div className="card-body">
                                            <span className="card-title">iPhone 11</span>
                                            <h3>Lorem ipsum dolor sit amet.</h3>
                                            <button className="btn btn-success">Shop me</button>
                                        </div>
                                    </div>

                                </SwiperSlide>

                            </Swiper>

                        </div>


                    </div>

                </div>
            </div>

        </>
    )
}

export default ProductsCard
