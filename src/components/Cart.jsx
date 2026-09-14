
import React, { useEffect, useState } from 'react'
import Breadcrumb from './BroadCamp'


export default function Cart() {

    const [cartItem, setCartItem] = useState([])
    const [select , setSelect]=useState([])




useEffect(()=>{
    const cart=JSON.parse(localStorage.getItem('cart')) || []
    setCartItem(cart)





},[])




// biss heir 
const subtotal=cartItem.reduce((acc,current)=> acc + current.price * current.quantity , 0)
const tax = subtotal * 0.10
const shippning=subtotal > 1000 ? 0 : subtotal * 0.02
const total =subtotal + tax + shippning


const addtoQuantity =(itemId)=>{
   
        const newItem =cartItem.map(item => item.id === itemId ? {...item , quantity:item.quantity + 1 , total:item.total + 1} : item)
        localStorage.setItem('cart', JSON.stringify(newItem))
        setCartItem(newItem)

}

const minusProduct=(itemID)=>{
    const newProduct=cartItem.map(item => {

    
      if(item.quantity > 1){
          if(item.id === itemID){
            return {...item , quantity:item.quantity-1 , total:item.total - 1}
        }
        return item
      }
      return item
})
   setCartItem(newProduct)
   localStorage.setItem('cart', JSON.stringify(newProduct))


   
}

const deleteProduct=(productID)=>{
    const deletedItem=cartItem.filter(item => item.id !== productID)
    setCartItem(deletedItem)
    localStorage.setItem('cart' , JSON.stringify(deletedItem))

}


const selectedItem = (cardID) => {
setSelect(prev => 
    prev.includes(cardID) ?
    prev.filter(item => item !== cardID) : 
    [...prev , cardID]
)

}
console.log(select);


const removeSelectItem =()=>{
    const newItem = cartItem.filter(item => !select.includes(item.id))
    setCartItem(newItem)


}


const selectall = ()=>{

    if(select.length === cartItem.length){
    setSelect([])
    }else{
        setSelect(cartItem.map(item => item.id))
    }
}



    return (
        <>
            <Breadcrumb page='Cart' />

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
                        {cartItem.map(item => (
                                <tbody className='mt-3' key={item.id}>
                                    <tr className='mt-2 '>
                                        <td className='text-center' data-label onClick={()=>selectedItem(item.id)}><input type="checkbox" checked={select.includes(item.id)}/></td>
                                        <td data-label='Product'>
                                            <div className="card-img d-flex align-items-center">
                                                <img src={item.image} alt="" className="img-fluid"
                                                    style={{ width: '30%' }} />
                                                <div className="card-img-des ">
                                                    <h5>{item.name}</h5>
                                                    <span className="text-muted">{item.category}</span>
                                                    <p><i className="ri-circle-fill"></i> In Stock</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='cart-td' data-label='Price'>
                                            <h5>${item.price}</h5>
                                        </td>
                                        <td className='cart-td' data-label='Qauntity'>
                                            <div className="card-qauntity  overflow-hidden ">
                                                <span className='d-flex justify-content-center align-items-center p-3'onClick={()=>minusProduct(item.id)}><i className="ri-subtract-line"></i></span>
                                                <span className='d-flex justify-content-center align-items-center p-3'>{item.quantity}</span>
                                                <span className='d-flex justify-content-center align-items-center p-3'onClick={()=>addtoQuantity(item.id)}><i className="ri-add-large-line"></i></span>
                                            </div>
                                        </td>
                                        <td className='cart-td'>
                                            <h5>{item.total}</h5>
                                        </td>
                                        <td className='cart-td action' data-label='Action'>
                                            <i className="ri-delete-bin-line" onClick={()=>deleteProduct(item.id)}></i>
                                        </td>

                                    </tr>




                                </tbody>
                        ))}
                            </table>
                   
         <div className="cart-total-box">
                                <span className='total-cart' onClick={selectall}><input type="checkbox" className='form-check' />Select All</span>
                                <span className='total-cart'onClick={removeSelectItem} ><i className="ri-delete-bin-line" ></i>Remove Selected</span>

                            </div>

                        </div>

                        


                        <div className="col-12 col-md-4 p-2 rounded-2 mt-2 bg-white">
                            <h6 className='order-title'>Order Summery</h6>
                            <hr className='text-muted' />
                            <p className="sub-total  d-flex justify-content-between">Subtotal({cartItem.length}) <span>${subtotal.toFixed(2)}</span></p>
                            <span className="sub-total d-flex justify-content-between">Shipping <span>${shippning === 0 ? 'Free' : shippning.toFixed(2)}</span></span>
                            <p className="sub-total-des">Free shippiing on all orders</p>
                            <p className="sub-total d-flex justify-content-between">Tax(10%) <span>${tax.toFixed(2)}</span></p>
                            <h5 className="sub-total d-flex justify-content-between mt-5">Total <span className='sub-total-price'>${total.toFixed(2)}</span></h5>

                            <hr className='text-muted' />
                            <button className="btn btn-success btn-process d-flex justify-content-center gap-2 w-100"><i className="ri-lock-2-line"></i>Proceed to Checkout</button>
                            <div className="coupon py-4">
                                <h6>Have a coupon code?</h6>
                                <div className="coupon-input d-flex gap-1 ">
                                    <input type="text" className='form-control' placeholder='Enter coupon code' />
                                    <button className="btn btn-success">Apply</button>
                                </div>
                            </div>
                            <div className="cart-total-icon">
                                <div className="icon d-flex align-items-center">
                                    <i className="ri-truck-line"></i>
                                    <span>Free Shipping <p>On all orders over $50</p></span>
                                </div>
                                <div className="icon d-flex align-items-center">
                                    <i className="ri-shield-line"></i>
                                    <span>Secure Payment <p>100% secure checkout</p></span>
                                </div>
                                <div className="icon d-flex align-items-center">
                                    <i className="ri-arrow-go-back-line"></i>
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
