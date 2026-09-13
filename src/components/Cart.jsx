
import React from 'react'
import Breadcrumb from './BroadCamp'

export default function Cart() {
  return (
    <>
    <Breadcrumb page='Cart'/>

    <div className="card">

  
    <div className="container card-container">
    <h3 className="shopping-card my-1">Shopping Cart</h3>
    <p className="shopping-card-des text-muted m-0">You have 4 items in your cart</p>
    <div className="row  justify-content-between p-2">
        <div className="col-12 col-md-8  rounded-5 mt-2">
            <table className='table'>
                <thead> 
                <tr className='text-center bg-danger-subtle'>
                    <th className=""></th>
                    <th className="text-muted flex-shrink-1 w-50">Product</th>
                    <th className="text-muted">Price</th>
                    <th className="text-muted">Quantity</th>
                    <th className="text-muted">Total</th>
                    <th className="text-muted">Action</th>
                </tr>

                </thead >
                <tbody className='mt-3'> 
                    <tr className='mt-2 '>
                        <td className='text-center' data-label><input type="checkbox" className=' ' /></td>
                        <td  data-label='Product'>
                            <div className="card-img d-flex align-items-center">
                                <img src="./../../public/assets/products/pc/pc10.jpg" alt="" className="img-fluid" 
                                style={{width:'30%'}} />
                                <div className="card-img-des ">
                                    <h5>Intel Core i5-13600K</h5>
                                    <span className="text-muted">Processor</span>
                                    <p><i class="ri-circle-fill"></i> In Stock</p>
                                </div>
                            </div>
                        </td>
                        <td className='cart-td'data-label='Price'>
                            <h5>$289.00</h5>
                        </td>
                            <td className='cart-td' data-label='Qauntity'>
                            <div className="card-qauntity  overflow-hidden ">
                                <span className='d-flex justify-content-center align-items-center p-3'><i class="ri-subtract-line"></i></span>
                                <span className='d-flex justify-content-center align-items-center p-3'>1</span>
                                <span className='d-flex justify-content-center align-items-center p-3'><i class="ri-add-large-line"></i></span>
                            </div>
                        </td>
                            <td className='cart-td'>
                            <h5>3</h5>
                        </td>
                            <td className='cart-td action' data-label='Action'>
                            <i class="ri-delete-bin-line"></i>
                        </td>
                 
                    </tr>


                    

                </tbody>
            </table>
            <div className="cart-total-box">
            <span className='total-cart'><input type="checkbox" className='form-check' />Select All</span>
            <span className='total-cart'><i class="ri-delete-bin-line"></i>Remove Selected</span>

            </div>


        </div>





        <div className="col-12 col-md-4 p-2 rounded-2 mt-2 bg-white">
            <h6 className='order-title'>Order Summery</h6>
            <hr className='text-muted'/>
            <p className="sub-total  d-flex justify-content-between">Subtotal(4items) <span>$1,195.00</span></p>
            <span className="sub-total d-flex justify-content-between">Shipping <span>$0</span></span>
            <p className="sub-total-des">Free shippiing on all orders</p>
            <p className="sub-total d-flex justify-content-between">Tax(10%) <span>$119.50</span></p>
            <h5 className="sub-total d-flex justify-content-between mt-5">Total <span className='sub-total-price'>$1.314.50</span></h5>
            
            <hr className='text-muted'/>
            <button className="btn btn-success btn-process d-flex justify-content-center gap-2 w-100"><i class="ri-lock-2-line"></i>Proceed to Checkout</button>
           <div className="coupon py-4">
             <h6>Have a coupon code?</h6>
             <div className="coupon-input d-flex gap-1 ">
                <input type="text" className='form-control' placeholder='Enter coupon code' />
                <button className="btn btn-success">Apply</button>
             </div>
           </div>
           <div className="cart-total-icon">
            <div className="icon d-flex align-items-center">
                <i class="ri-truck-line"></i>
                <span>Free Shipping <p>On all orders over $50</p></span>
            </div>
                 <div className="icon d-flex align-items-center">
                <i class="ri-shield-line"></i>
                <span>Secure Payment <p>100% secure checkout</p></span>
            </div>
                     <div className="icon d-flex align-items-center">
                <i class="ri-arrow-go-back-line"></i>
                <span>Easy Returns <p>30 days return policy</p></span>
            </div>
           </div>
            
        </div>

    </div>

    </div>
      </div>
      
    </>
  )
}
