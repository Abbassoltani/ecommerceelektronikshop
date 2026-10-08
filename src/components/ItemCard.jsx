
import React from 'react'
import Star from './Star'
import { Link } from 'react-router-dom';


function ItemCard({ products , onDetails , onWish , onCart , onModal}) {
    console.log(products);
    
    
    return (
        < >
            <div className="global-cart  card  d-flex justify-content-center position-relative" >

                <div className="p-3">

                    <div className="global-cart-wrapper p-2 position-relative overflow-hidden">

                        {products.isNew && (
                            <div className="badge-card-box position-absolute end-0">
                                <span className="">NEW</span>

                            </div>

                        )}

                        <img src={products.image} alt="" className='img-fluid' />
                    </div>
                    <Link to={`/products/${products.id}`}>
                    <div className="card-title " onClick={()=>onDetails(products.id)}><h4>{products.name}</h4> </div>
                    
                    </Link>
                    <div className="card-title-model ">Model:<h6> {products.brand}</h6> </div>



                    <div className="card-price-wrapper d-flex align-items-center gap-3">
                        <span className="cart-price">${products.price}</span>
                        <div className="cart-price-des ">
                            <span className="cart-price-des-star text-center"><Star price={products.price} /></span>
                            <hr className='p-0 my-1' />
                            <p className='p-0 m-0'>Rating ( {products.rating} )</p>
                            <p className='p-0 m-0'>Discount :  ( {products.discount} )</p>
                            <p className='p-0 m-0'>Review : {products.reviews}</p>

                        </div>


                    </div>
                </div>
                <button className='global-button ' onClick={()=>onCart(products)}>ADD TO CART</button>


                <div className="global-carditem-badge position-absolute">
                    <i className="ri-poker-hearts-line" onClick={()=>onWish(products)}></i>
                    <i className="ri-bar-chart-grouped-line"></i>
                    <i className="ri-eye-line" onClick={()=>onModal(products.id)}></i>

                </div>




            </div>












        </>
    )
}

export default ItemCard
