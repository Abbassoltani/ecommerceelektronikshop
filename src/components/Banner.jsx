import React, { useState } from 'react'

import { products } from './../products.json'


function Banner() {

  const [allProducts, setAllProducts] = useState(()=>{
return [...products].sort(()=> Math.random()- 0.5).slice(0,1)

  })


    return (
        <>
           

           




                        <div className="col-12  col-lg-4 col-md-6 mt-sm-2 banner-col">
                            <div className="card banner p-3 h-100">
                                <div className="row align-items-center">

                                        {allProducts.map(item => 
                                        <>
                                                             <div className="col-7  ">
                                        <div className="banner-content  ">

                                            <span>Up to 30% OFF </span>
                                            <h3>{item.model}</h3>
                                            <button className="btn-button">Shop Now <i class="ri-arrow-right-s-line"></i></button>
                                        </div>
                                    </div>
                                    <div className="col-5 col-img">
                                        <img src={item.image} className='img-fluid' alt="" />
                                    </div>
                                        </>
                                        )}
                   
                                </div>
                            </div>
                        </div>

     

    




                    

   

        </>
    )
}

export default Banner
