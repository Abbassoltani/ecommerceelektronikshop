import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
     
        <hr />
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
                                    <li>MONITOR</li>
                                    <li>CPU</li>
                                    <li>GAME</li>
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


                                    <div className="card my-1 h-100 position-relative">
                                        <img src={product.image} alt='' className='card-img-top   ' style={{ objectFit: 'contain', height: '230px' }} 
                                        onError={(e)=>{
                                            e.currentTarget.src='./../../public/noimage.png'
                                        }}
                                        />
                                        <div className="card-body d-flex flex-column justify-content-between  gap-1" >
                                            <span className="card-title  text-muted  ">{product.name} </span>
                                            <h3 className='product-card-h3  '>{product.model}</h3>
                                            <span className='cart-star d-flex'>
                                            <Star  price={product.price}/>
                                            <p className='mx-2'> ({product.reviews})</p>
                                           
                                            

                                            </span>
                                            <span className="card-price fw-bold">Price :{product.price.toFixed(2)} $</span>
                                            <button className="btn btn-success">Shop me</button>
                                        </div>

                                    <div className="card-badge position-absolute  fs-3">
                                        <i class="ri-poker-hearts-line"></i>
                                        <i class="ri-bar-chart-grouped-line"></i>
                                        <i class="ri-eye-line"></i>
                                        <i class="bi bi-cart"></i>



                                    </div>
                                    </div>

                                </SwiperSlide>


                            ))}
    
                   



                             





                            </Swiper>

                        </div>


                    </div>
                                    <div className="btn-wrapper">
                            <button className="btn btn-warning d-flex product-btn "><Link to='/products'>All Item</Link></button>

                                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductsCard
