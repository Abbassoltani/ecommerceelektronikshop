
import  {  useState } from 'react'
import ItemCard from '../components/ItemCard'


function Wishlist() {
  const [wishlistItem, setWishListItem] = useState(()=>{
    return JSON.parse(localStorage.getItem('wishlist')) || []
  })



  
  const addToCard = (product) => {
    
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const alreadyinCart=cart.find(Item => Item.id === product.id)

    if(!alreadyinCart){
      const cartItem={...product , quantity:1}
      const updateCart=[...cart , cartItem]
      localStorage.setItem('cart' , JSON.stringify(updateCart))
window.dispatchEvent(new Event('cartUpdate'))
    }else {
        const allCart=cart.map(item => (
          item.id === product.id ? {...item , quantity:item.quantity + 1} : item
        ))
      localStorage.setItem('cart' , JSON.stringify(allCart))
window.dispatchEvent(new Event('cartUpdate'))
    }



  const filterdWishlistItem=wishlistItem.filter(item => item.id !== product.id)
  setWishListItem(filterdWishlistItem)
  localStorage.setItem('wishlist' , JSON.stringify(filterdWishlistItem))
  
  window.dispatchEvent(new Event('wishlistUpdate'))
  
    

  }

  const clearall = ()=> {
     localStorage.removeItem('wishlist')  
     window.dispatchEvent(new Event('wishlistUpdate'))
     setWishListItem([
      
     ])
  }









  return (
    <>
    {!wishlistItem.length && (
      <div className="wishlist-info w-100"> <i class="ri-error-warning-line"></i> Dein Wishllist ist Leer</div>
    )}
      <div className="container">

        <div className="row">

          {wishlistItem.map(products => {



            return (


              <>
              
              <div className="col-12 my-5 col-md-4 col-lg-3  d-flex position-relative">
                <ItemCard products={products} onCart={addToCard} />




              </div>

              <div className="wishlist-managmet position-fixed">
                <i class="ri-delete-bin-7-line" onClick={clearall}></i>
                <p className='text-center'>Clear All</p>
              </div>

              </>
            )
          })}


        </div>

      </div>
    </>
  )
}

export default Wishlist
