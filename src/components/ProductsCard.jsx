import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import products from './../products.json'
import Star from './Star'
import ItemCard from './ItemCard'
import { useNavigate } from 'react-router-dom'

function ProductsCard() {
    const navigate = useNavigate()
    const [allProduct, setAllProduct] = useState(() => {
        return [...products.products].sort(() => Math.random() - 0.5)
    })

    const goToDetails = id => {
        navigate(`/products/${id}`)
    }

    const addToWishList = (product) => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
        const existingInWishList = wishlist.find(item => item.id === product.id)

        if (!existingInWishList) {
            const newItem = { ...product, quantity: 1 }
            const updateWishlist = [...wishlist, newItem]
            localStorage.setItem('wishlist', JSON.stringify(updateWishlist))
        }

        window.dispatchEvent(new Event('wishlistUpdate'))

    }

    const addToCart = product => {
        const cart = JSON.parse(localStorage.getItem('cart')) || []

        const alreadyInCart = cart.find(item => item.id === product.id)

        if (!alreadyInCart) {
            const newItem = { ...product, quantity: 1 }
            const updateCart = [...cart, newItem]
            localStorage.setItem('cart', JSON.stringify(updateCart))
            window.dispatchEvent(new Event('wishlistUpdate'))

        } else {
            const editCart = cart.map(item => (
                item.id === product.id ? { ...item, quantity: item.quantity + 1, total: item.total + 1 } : item
            ))
            const updateEditedCart = editCart
            localStorage.setItem('cart', JSON.stringify(updateEditedCart))

            
        }
    }





    return (
        <>
            <div className="product-card py-4">
                <div className="container">

                    <hr />
                    <div className="row g-4 ">

                        {/* left */}
                        <div className="col-12 col-md-3  ">
                            <div className="product-img h-100">
                                <img src="/public/assets/bannerpc1.png" alt="" className="img-fluid h-100"
                                    style={{ objectFit: 'cover' }} />
                            </div>

                        </div>

                        {/* right  */}
                        <div className="col-12 col-md-9 d-flex flex-column gap-3 h-100">
                

                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={40}
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





                                    <SwiperSlide className='h-100 py-4 d-flex gap-0'>



                                        <ItemCard products={product} onDetails={goToDetails} onWish={addToWishList} onCart={addToCart} />

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
