
import React, { useState } from 'react'
import Banner from '../components/Banner'

import ProductsCard from '../components/ProductsCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'


function Home() {



  return (
    <>
      <header className="header ">

        <Swiper
          modules={[Navigation, EffectFade, Autoplay]}
          effect='fade'
          spaceBetween={10}
          slidesPerView={1}

          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
        >
          <SwiperSlide>
            <div className="hero">
              <div className="heroWrapper hero1">
                <div className="hero-img"></div>
                <div className="hero-content">
                  <h4>Weekly offer!</h4>
                  <h1>Xiaomi PAD 5, 11-inch 128GB, Pearl White</h1>
                  <span className="hero-offer">Limited time offer!</span>
                  <button className='btn-button'>Learn More <i class="ri-arrow-right-s-line"></i> </button>

                </div>
              </div>
            </div>

          </SwiperSlide>

          <SwiperSlide>
            <div className="hero">
              <div className="heroWrapper hero2">
                <div className="hero-img"></div>
                <div className="hero-content">
                  <h4>AMAZING OFFER!</h4>
                  <h1>PDP Wired Controlle For Xbox One</h1>
                  <span className="hero-offer">Best Deal offer!</span>
                  <button className='btn-button'>Learn More <i class="ri-arrow-right-s-line"></i> </button>

                </div>
              </div>
            </div>

          </SwiperSlide>



        </Swiper>


      </header>

      <div className="banner-section container-fluid">

        <div className="container">

          <div className="row ">


            <Banner />
            <Banner />
            <Banner />
          </div>
        </div>
      </div>
      <ProductsCard />
      <section className="info">
        <div className="container d-flex align-items-center">
          <div className="info-content" >
            <p>UP TO 25% DISCOUNT!</p>
            <h1 className='my-4'>Stable Bluetooth 5.0
              Ultimate Sound Experience</h1>

              <button className="btn btn-danger">Shop Now <i class="ri-arrow-right-s-line"></i></button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
