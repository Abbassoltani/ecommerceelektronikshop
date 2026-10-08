
import React, { useState } from 'react'
import { products } from './../products.json'
import Breadcrumb from '../components/BroadCamp'
import Star from '../components/Star'
import { toast, ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'
import ItemCard from '../components/ItemCard'

function Products() {
  const [modalwindow, setModalwindow] = useState({})

  const [category, setCategory] = useState('All Category')
  const [brand , setBrand]=useState('All Brand')
  const [sorting , setSorting]=useState('Popularity')






  const categorySort=[...new Set(products.map(item => item.category))]
  const categoryFilter=category === 'All Category' ? products
  :products.filter(item => item.category === category)

  const categortyBrand=[...new Set(categoryFilter.map(item => item.brand))]
  const categoryBrandFilter=brand === 'All Brand'? categoryFilter 
  :categoryFilter.filter(item => item.brand === brand)


  const productSorting=[...categoryBrandFilter]

  if(sorting === 'low'){
    productSorting.sort((a,b)=>a.price - b.price)
  }else if (sorting === 'high'){
    productSorting.sort((a,b)=>b.price - a.price)
  }else {
    categoryFilter
  }



  // handler 
  const modalHandler = (id) => {
    const product = products.find(item => item.id === id)
    setModalwindow(product)

    const modal=new bootstrap.Modal(document.getElementById('modalButtom'))
    modal.show()
  }


  const addToWishlist =(product)=>{
    const existing =JSON.parse(localStorage.getItem('wishlist')) || []
    const alreadyinWishlist = existing.find(item => item.id === product)

        if(!alreadyinWishlist){
          const wishlist = {...product , quantity:1}
          const updateWishlist = [...existing,wishlist]

          localStorage.setItem('wishlist' , JSON.stringify(updateWishlist))
          toast.success('your Product is adding to your wishlist')
        }else {
          toast.warning('the product is added ')
        }
    window.dispatchEvent(new Event('wishlistUpdate'))


  }

  const addToCart =(product)=>{
    const existingCart=JSON.parse(localStorage.getItem('cart')) || []
    const alreadyCart=existingCart.find(item => item.id === product.id)

    if(!alreadyCart){
      const newProduct={...product, quantity : 1, total:1}
      const update=[...existingCart, newProduct]
      localStorage.setItem('cart' , JSON.stringify(update))
      toast.success(`${modalwindow.name} is added to your Cart`)

    }else {
const newUpdate=existingCart.map(item => (
  item.id === product.id ? {...item , quantity:item.quantity + 1 , total:item.total + 1 } : item
))
      localStorage.setItem('cart', JSON.stringify(newUpdate))
      
    
    }



  }









  return (
    <>
      <Breadcrumb page='Product'/>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
      />
      <section className="product my-5 ">
        <div className="container">
          <div className="row my-4 justify-content-center">
            <div className="col-md-5 d-md-flex d-flex align-items-center gap-3 justify-content-center  ">
              <div className="product-filter d-flex align-items-center justify-content-center">
                <i className="bi bi-sliders2 fs-2 mx-2"></i>
                <span className='d-none d-lg-flex'>Filter :</span>
              </div>
              <select name="" id="product-select-category" className='border border-1 p-2' onChange={(e)=>{
                setCategory(e.target.value)
                setBrand('All Brand')
              }} >
                  <option value='All Category'>All Category</option>
                  {categorySort.map(item => (
                    <option value={item}>{item}</option>

                  ))}

              

           


              </select>

              <select name="" id="product-select-category" className='border border-1 p-2 d-xs-flex' value={brand} onChange={(e)=>setBrand(e.target.value)} >
                <option value="All Brand">All Brand</option>
                {categortyBrand.map(item => (

                  <option value={item}>{item}</option>
                ))}
            

            
              </select>

  
            </div>

            <div className="col-md-5 d-none d-md-flex align-items-center gap-3 px-5 product-toolbar-left justify-content-end ">


              <span className='d-none d-lg-flex'>Sort by :</span>

              <select name="" id="product-select-category" className='border border-1 p-2' onChange={(e)=>setSorting(e.target.value)}>
                <option value="popularity">Popularity</option>
                <option value="low">Price: Low</option>
                <option value="high">Price : High</option>

              </select>

              {/* <div className="product-category-left-icon fs-4 d-flex gap-2">
                <i className="ri-grid-fill"></i>
                <i className="ri-list-check"></i>
              </div> */}





            </div>
          </div>

          <div className="container">
            <div className="row  justify-content-center g-3">


              {productSorting.map(product => (
               
              
                <ItemCard products={product} onWish={addToWishlist} onCart={addToCart} onModal={modalHandler}/>

                







               
              ))}

              {/* modal */}
              <div className="modal   fade" tabIndex='-1' id='modalButtom'
              >
                <div className="modal-dialog ">
                  <div className="modal-content border border-0">
                    <div className="modal-header border border-0 position-relative">

                      <button type='button' className="btn-close close-modal-buttom position-absolute " data-bs-dismiss='modal' aria-label='close' ></button>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-6">
                          <img src={modalwindow.image} alt="" className="modal-image" />
                        </div>
                        <div className="col-6">
                          <div className="card-modal-wrapper">
                            <div className="card-modal-content">
                              <h3 className="card-modal-title">{modalwindow.name}</h3>
                              <h3 className="card-modal-price">{modalwindow.price} $</h3>
                              <span className='modal-star'><Star price={modalwindow.price} /> <p>({modalwindow.reviews})</p></span>
                              <p className="card-modal-des text-muted">{modalwindow.description}</p>
                            </div>

                            <div className="card-modal-ram">
                              <h5>Memory : 16GB</h5>
                              <div className="card-modal-ram-wrapper">
                                <span>16GB</span>
                                <span>32GB</span>
                                <span>64GB</span>
                              </div>
                              <div className="card-modal-ram-wrapper mt-3">
                                <h5>Storage: 64GB</h5>
                                <span>64GB</span>
                                <span>264GB</span>

                              </div>
                              <div className="card-modal-quantity-wrapper">
                                <input type="text" placeholder='1' />
                                <div className="quantity-buttom d-flex flex-column">
                                  <i className="ri-arrow-up-s-line"></i>
                                  <i className="ri-arrow-down-s-line"></i>
                                </div>
                                <button className="btn btn-info mx-auto  text-light" onClick={addToCart}>IN THE WARENKORB</button>
                                <button className="btn bg-black text-white">buy Now</button>

                              </div>

                              <div className="card-modal-add">
                                <div className="card-modal-add-wrapper d-flex">
                                  <button className='d-flex' onClick={() => {

                                    addToWishlist()
                                  }}><i className="ri-poker-hearts-line"></i>Add to Wishlist</button>
                                  <button className='d-flex'><i className="ri-bar-chart-line"></i>Add to Compare</button>
                                </div>
                                {modalwindow.stock !== 0 ? (
                                  <button className='card-modal-add-lager'><i className="bi bi-check-lg"></i>Auf Lager</button>

                                ) : (

                                  <button className='card-modal-add-lager empty'><i className="bi bi-dash-circle"></i>nicht mehr Auf Lager</button>

                                )}
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                    {/* <div className="modal-footer">
                            <button>click</button>
                          </div> */}
                  </div>

                </div>
              </div>









            </div>
          </div>



        </div>
      </section>



    </>
  )
}

export default Products
