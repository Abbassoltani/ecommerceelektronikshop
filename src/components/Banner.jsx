import React, { useState } from 'react'

import { products } from './../products.json'


function Banner() {

  const [allProducts, setAllProducts] = useState(()=>{
return [...products].sort(()=> Math.random()- 0.5).slice(0,1)

  })

  const bannerImage=[
    '/public/assets/ai1.png',
    '/public/assets/ai2.png',
    '/public/assets/ai3.png',
    '/public/assets/ai4.png',
    '/public/assets/ai5.png',
  ]


    return (
        <>
        <div className="banner d-flex ">

           

           




                                      



                                        {bannerImage.map(img => (
                                            <>
                            <div className=" bannerr  " >

                                                <img src={img}alt="" className='img-fluid banner-img'/>
                                                
                                            </div>
                                            </>
                                            ))}

                                    
                   

     

    




                    

   
        </div>

        </>
    )
}

export default Banner
