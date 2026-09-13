
import React, { useState } from 'react'
import { products } from './../products.json'
import Breadcrumb from '../components/BroadCamp'
import Star from '../components/Star'
import { toast, ToastContainer } from 'react-toastify'
function Products() {
  const [modalwindow, setModalwindow] = useState({})

  const [wishlistItem, setWishlistItem] = useState({})
  const [category, setCategory] = useState('All Category')
  const [brand , setBrand]=useState('All Brand')
  const [sorting , setSorting]=useState('Popularity')





  const categorySort=[...new Set(products.map(item => item.category))]
  const categoryFilter=category === 'All Category' ? products
  :products.filter(item => item.category === category)

  const categortyBrand=[...new Set(categoryFilter.map(item => item.brand))]
  const categoryBrandFilter=brand === 'All Brand'? categoryFilter 
  :categoryFilter.filter(item => item.brand === brand)


  const productSorting=[...categoryFilter]

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
  }


  const addToWishlist =()=>{
    const existing =JSON.parse(localStorage.getItem('wishlist')) || []
    const alreadyinWishlist = existing.find(item => item.id === modalwindow.id)

        if(!alreadyinWishlist){
          const wishlist = {...modalwindow , quantity:1}
          const updateWishlist = [...existing,wishlist]

          localStorage.setItem('wishlist' , JSON.stringify(updateWishlist))
          toast.success('your Product is adding to your wishlist')
        }else {
          toast.warning('the product is added ')
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
                <i class="bi bi-sliders2 fs-2 mx-2"></i>
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
                <>


                  <div className="col-12 col-md-4 col-lg-3  d-flex justify-content-center   ">
                    <div className="card h-100 position-relative">
                      <div className="product-image-card">
                        <img src={product.image} alt="" className='product-card-image img-fluid'
                        />                  </div>
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text m-0">{product.model}</p>
                        <span className="cart-star ">

                          <Star price={product.price} />

                        </span>
                        <h5>Price: <span>{product.price}</span></h5>
                      </div>
                      <button className="btn btn-success d-flex justify-content-center">Shop Now</button>

                      <div className="card-badge position-absolute  fs-4">
                        <i class="ri-poker-hearts-line"></i>
                        <i class="ri-bar-chart-grouped-line"></i>
                        <i class="ri-eye-line" type='button'
                          data-bs-target='#modalButtom'
                          data-bs-toggle='modal'
                          onClick={() => modalHandler(product.id)}
                        ></i>
                        <i class="bi bi-cart"></i>
                      </div>
                    </div>


                  </div>






                </>
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
                                  <i class="ri-arrow-up-s-line"></i>
                                  <i class="ri-arrow-down-s-line"></i>
                                </div>
                                <button className="btn btn-info mx-auto  text-light">IN THE WARENKORB</button>
                                <button className="btn bg-black text-white">buy Now</button>

                              </div>

                              <div className="card-modal-add">
                                <div className="card-modal-add-wrapper d-flex">
                                  <button className='d-flex' onClick={() => {

                                    addToWishlist()
                                  }}><i class="ri-poker-hearts-line"></i>Add to Wishlist</button>
                                  <button className='d-flex'><i class="ri-bar-chart-line"></i>Add to Compare</button>
                                </div>
                                {modalwindow.stock !== 0 ? (
                                  <button className='card-modal-add-lager'><i class="bi bi-check-lg"></i>Auf Lager</button>

                                ) : (

                                  <button className='card-modal-add-lager empty'><i class="bi bi-dash-circle"></i>nicht mehr Auf Lager</button>

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
