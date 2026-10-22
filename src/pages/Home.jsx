
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


function Home() {

  const teamGroup =[
    {name:'Bernard Müller' , position:'Team Manager',img:'/assets/person1.png'},
    {name:'Denis Bergkamp' , position:'Founder & CEO',img:'/assets/person2.png'},
    {name:'Paolo Dicanio' , position:'E-commerce Manager',img:'/assets/person3.png'},
   
  ]



  return (
    <>
      <header className="header  ">
        <div className="container">
          

       

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
      </header>


        <div className="container">
          <div className="services-wrapper my-5">
          
              <div className="row justify-content-center  gap-1">
                {products.services.map(service => (
                  <Services {...service}/>


                ))}
                
                

              </div>
            
          </div>

          <div className="row justify-content-between">
    
<AboutUs/>
  <div className="team-section text-center my-5">
            <span className="team-title text-center">Our Team</span>
            
        <div className="container">
            <div className="row">
     {teamGroup.map((team, index)=>(
<Team key={index} {...team}/>

))}
            </div>
        </div>
      </div>

<Info/>

<div className="banner-wrapper d-flex">
<Banner/>

</div>




          
          </div>
        </div>
     

       
    </>
  )
}

export default Home
