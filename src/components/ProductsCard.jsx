import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import products from './../products.json'
import Star from './Star'

function ProductsCard() {
    const [allProduct , setAllProduct]=useState(()=>{
        return [...products.products].sort(()=>Math.random() - 0.5)
    })

    console.log('====================================');
    console.log(products);
    console.log('====================================');





    return (
        <>
            <div className="product-card py-4">
                <div className="container">
                    <div className="row g-4 ">

                        {/* left */}
                        <div className="col-12 col-md-3  ">
                            <div className="product-img h-100">
                                <img src="./../../public/assets/productcard1.jpg" alt="" className="img-fluid h-100"
                                    style={{ objectFit: 'cover' }} />
                            </div>

                        </div>

                        {/* right  */}
                        <div className="col-12 col-md-9 d-flex flex-column gap-3">
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
                            

                            {allProduct.map(product => (



                           

             <SwiperSlide  className='h-100 py-4'>


                                    <div className="card my-1 h-100 ">
                                        <img src={product.image} alt='' className='card-img-top bg-body-secondary mb-5  py-2' style={{ objectFit: 'contain', height: '180px' }} 
                                        onError={(e)=>{
                                            e.currentTarget.src='./../../public/noimage.png'
                                        }}
                                        />
                                        <div className="card-body d-flex flex-column justify-content-between  gap-1" >
                                            <span className="card-title fs-3  my-0">{product.name} </span>
                                            <div className="product-content d-flex flex-column justify-content-between">
                                            <h3 className='product-card-h3 fs-4 my-0'>{product.model}</h3>
                                            <Star price={product.price}/>
                                            <span className="card-text fw-bold fs-4">Price :{product.price} $</span>
                                            </div>
                                            <button className="btn btn-success">Shop me</button>
                                        </div>
                                    </div>

                                </SwiperSlide>


                            ))}
    
                   



                             





                            </Swiper>

                        </div>


                    </div>
                                    <div className="btn-wrapper">
                            <button className="btn btn-warning d-flex product-btn ">All Item</button>

                                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductsCard
