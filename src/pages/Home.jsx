
import Banner from '../components/Banner'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import Info from '../components/Info'
import AboutUs from '../components/AboutUs'
import Team from '../components/Team'
import Services from '../components/Services'
import products from './../products.json'
import FeatureCategory from '../components/FeatureCategory'
import ItemCard from '../components/ItemCard'
import { useState } from 'react'
import { Link } from 'react-router-dom'




function Home() {

  const [product, setProduct] = useState(products.products)

  const teamGroup = [
    { name: 'Bernard Müller', position: 'Team Manager', img: '/assets/person1.png' },
    { name: 'Denis Bergkamp', position: 'Founder & CEO', img: '/assets/person2.png' },
    { name: 'Paolo Dicanio', position: 'E-commerce Manager', img: '/assets/person3.png' },

  ]

  const onWish=(selected)=>{
    const existingWishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    const alreadyInWishlist=existingWishlist.find(item => item.id === selected.id)

    if(!alreadyInWishlist){
      const wish={...selected, quantity:1}
      const updateWishlist=[...existingWishlist , wish]
      localStorage.setItem('wishlist' , JSON.stringify(updateWishlist))
      window.dispatchEvent(new Event('wishlistUpdate'))

    }
    
  }

  const onCart=(selectedCard)=>{
   const existingCart=JSON.parse(localStorage.getItem('cart'))|| []
   const alreadyInCart=existingCart.find(item => item.id === selectedCard.id)


   if(!alreadyInCart){
    const cart={...selectedCard, quantity:1}
    const updatedCart=[...existingCart, cart]
    localStorage.setItem('cart' , JSON.stringify(updatedCart))
 
    window.dispatchEvent(new Event('cartUpdate'))

   }else{
    const newCart=existingCart.map(item => 
      item.id === selectedCard.id ? {...item , quantity:item.quantity + 1 , total:item.total + 1} : item
    )
    const updateNewCart=newCart
    localStorage.setItem('cart' , JSON.stringify(updateNewCart))
    window.dispatchEvent(new Event('cartUpdate'))


   }
    
  }

  const findBannerName=product.find(item => item.name === 'Pro Z790 Motherboard')
  const findBannerPc=product.find(item => item.name === 'Ultimate Gaming PC 05')



  return (
    <>
      <header className="header  ">
        {/* <div className="container-fluid"> */}


          <div className="container home-container">




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
                <div className="hero ">
                  <div className="heroWrapper hero1">
                    <div className="hero-img"></div>
                    <div className="hero-content">
                      <h4>Weekly offer!</h4>
                      <h1>Xiaomi PAD 5, 11-inch 128GB, Pearl White</h1>
                      <span className="hero-offer d-block">Limited time offer!</span>
                      <button className='btn-button'>Learn More <i className="ri-arrow-right-s-line"></i> </button>

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
                      <span className="hero-offer d-block">Best Deal offer!</span>
                      <button className='btn-button '>Learn More <i className="ri-arrow-right-s-line"></i> </button>

                    </div>
                  </div>
                </div>

              </SwiperSlide>



            </Swiper>

          </div>
        {/* </div> */}
      </header>


      <div className="container showCase-container">
                  <div className="showcase position-relative">
            <img src="/public/assets/banner6.png" alt="" />
            <Link to={findBannerPc ? `/products/${findBannerPc.id}` : '/products'} className='btn btn-danger showcase-font position-absolute'>
            Shop Now
            </Link>
         
          </div>

        <div className="about-section-home row justify-content-between">

          <AboutUs />

          <div className="featureservice-section">
            <h1 className="aboutus-title text-center text-lg-start">Featured <span>Product</span></h1>
            <span className="featured-des">Our highlighted service for the best results.</span>
            <hr />
            <div className="row justify-content-center">
              <div className="col-12 col-lg-9 ">
                <div className="featuredService-wrapper d-flex flex-wrap justify-content-center">
                  <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={15}
                    slidesPerView={3}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false
                    }}
                    navigation
   breakpoints={{
      375:{slidesPerView: 1,
        spaceBetween: 15},
      768: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 15
      }
    }}
                  >

                    {product.map(item => (
                      <SwiperSlide>
                        <ItemCard products={item} onWish={onWish} onCart={onCart}/>

                      </SwiperSlide>

                    ))}

                  </Swiper>
                </div>
              </div>

              <div className="col-12 col-md-3 featured-img">
                <img src="./../../public/assets/featured.png " className='w-100 img-fluid' alt="" />
              </div>
            </div>

          </div>


          <div className="services-wrapper my-1">
            <h1 className="aboutus-title text-center text-lg-start">Our <span>Services</span></h1>
            <hr className='mb-5' />

            <div className="row justify-content-center  gap-1">
              {products.services.map(service => (
                <Services {...service} />
              ))}
            </div>
          </div>

          <div className="showcase position-relative">
            <img src="/public/assets/banner5.png" alt="" />
            <Link to={findBannerName ? `/products/${findBannerName.id}` : '/products'} className='btn btn-danger showcase-font position-absolute'>
            Shop Now
            </Link>
         
          </div>

          

          <div className="team-section text-center my-1">
            <h1 className="aboutus-title text-center text-lg-start">Our <span>Team</span></h1>
            <hr />

            <div className="container">

              <div className="row team-row-wrapper">
                {teamGroup.map((team, index) => (
                  <Team key={index} {...team} />

                ))}
              </div>
            </div>
          </div>

          <Info />






        </div>
      </div>

      <div className="banner-wrapper d-flex justify-content-between ">
        <Banner />

      </div>


    </>
  )
}

export default Home
