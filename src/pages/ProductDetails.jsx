
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from './../products.json';
import Breadcrumb from '../components/BroadCamp';
import Star from '../components/Star';


export default function ProductDetails() {
  const { id } = useParams()
  const product = products.find(item => item.id === Number(id))
  const [activeTab, setActiveTab] = useState('Descrioption')
  const [quantity, setQuantity] = useState(1)
  // const [mainImage , setMainImage]=useState(product.image)
  const [activeImage , setActiveImage]=useState(product.image)
    

  const galleryImage=[
    product.image , 
     '/assets/products/cpu/cpu2.png',
  '/assets/products/cpu/cpu3.png',
  '/assets/products/cpu/cpu4.png',
  '/assets/products/cpu/cpu5.png'
  ]

  const categoryImage={
    cpu:[
      product.image,
         '/assets/products/cpu/cpu2.png',
  '/assets/products/cpu/cpu3.png',
  '/assets/products/cpu/cpu4.png',
  '/assets/products/cpu/cpu5.png'

    ],
    game:[
      product.image,
      "/assets/products/game/game6.png",
      "/assets/products/game/game7.png",
      "/assets/products/game/game8.png",
      "/assets/products/game/game9.png",
      "/assets/products/game/game10.png",

    ]
  }
const filtredCategory= categoryImage [product.category] ||[product.image]
  console.log(product.category);

  const addToCart =()=>{

    const existingCart=JSON.parse(localStorage.getItem('cart')) || []
    const alreadyCart=existingCart.find(item => item.id === product.id)

    if(!alreadyCart){
      const newCart={...product , 
        quantity,
        total:quantity
      }
      const updatedCart=[...existingCart , newCart]
      localStorage.setItem('cart' , JSON.stringify(updatedCart))
    }else{
      const newproductCart=existingCart.map(item => item.id === product.id ? {...item , quantity:quantity + 1} : item)
      
      localStorage.setItem('cart' , JSON.stringify(newproductCart))
    }


  }






  if (!product) {
    return <h1>no item</h1>
  }

  return (
    <>
      <Breadcrumb page='Product Details' />
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-12 col-md-6 px-1">
            <div className="row align-items-center">
              <div className="col-md-2 d-none d-md-flex flex-column ">
       {galleryImage.map(pic => (
        <img src={pic} key={pic}alt=""
          className={activeImage === pic ? 'active-image' : ''}
        
        onClick={()=>{
          // setMainImage(pic)
          setActiveImage(pic)
        }} />
       ))}
              </div>
              <div className="col-12 col-md-10">
                <img src={activeImage} alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <span className="pdstock badge bg-success-subtle text-bg-success  my-2">In Stock</span>
            <h4 className="pdname">{product.name}</h4>
            <p className="text-muted">{product.description}</p>
            <div className="pdstar d-flex  justify-content-between  align-items-center">
              <span className='pdstar-color'>
                <Star price={product.price} />

              </span>
              <span className="vrpdrank d-flex m-0 text-primary ">{product.rating} <p className='pdreview text-muted fs-6 m-0 px-1'>({product.reviews})</p></span>
              <span className='vr'></span>
              <span className=' text-primary fw-bold  '>Write to Review</span>


            </div>
            <div className="pdstar d-flex  justify-content-between  align-items-center">
              <span className='pdstar-price text-primary'>${product.price}</span>
              <span className="pdrank text-muted d-flex m-0">${product.oldPrice}</span>
              <span className='badge bg-danger-subtle text-danger p-2  '>15% OFF</span>


            </div>
            <p className="text-muted my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt dignissimos quis consectetur repellendus nemo consequuntur maiores fugit, et natus earum.</p>

            <div className="pdcolor d-flex gap-3 align-items-center">
              <span className='pdcolor-title '>Color:</span>
              <span className="color-item"></span>
              <span className="color-item"></span>
              <span className="color-item"></span>
              <span className="color-item"></span>

            </div>

            <div className="pdram d-flex gap-5">
              <span className='pdram-title'>Storage:</span>
              <div className='pdram-wrapper d-flex gap-5'>
                <span className="pd-ram-item">256GB</span>
                <span className="pd-ram-item">512GB</span>
                <span className="pd-ram-item">1TB</span>
              </div>
            </div>

            <div className="pdqauntity my-3 d-flex gap-5">
              <span className="pdquantity-title ">Quantity</span>
              <div className="pdquantity-wrapper">
                <span onClick={()=>{
                  if(quantity > 1){
                    setQuantity(quantity -1)
                  }
                }}><i className="ri-subtract-line" ></i></span>
                <span>{quantity}</span>
                <span onClick={()=>setQuantity( quantity+1)}><i className="ri-add-line"></i></span>
              </div>

            </div>
            <div className="pdbuttom my-4">
              <button className="btn btn-primary" onClick={addToCart}><i class="ri-luggage-cart-line" ></i>Add to Cart</button>
              <button className="btn"><i class="ri-heart-line"></i>Add to Wishlist</button>
            </div>
            <div className="pbicon d-flex gap-3">
              <div className="pbicon-box d-flex align-items-center gap-3">

                <i class="ri-truck-line"></i>
                <div className="pbicon-box-des d-flex flex-column">
                  <span>Free Shopping</span>
                  <span>On orders over $50</span>
                </div>
              </div>

              <div className="pbicon-box d-flex align-items-center gap-3">

                <i class="ri-recycle-line"></i>
                <div className="pbicon-box-des d-flex flex-column">
                  <span>30-Day Returns</span>
                  <span>Hassle free returns</span>
                </div>
              </div>

              <div className="pbicon-box d-flex align-items-center gap-3">

                <i class="ri-shield-check-line"></i>
                <div className="pbicon-box-des d-flex flex-column">
                  <span>2 Years Warranty</span>
                  <span>Official warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>





        <div className="row ">
          <div className="col-12  border-bottom my-5 ">
            <ul className="w-100 d-flex gap-5 text-muted pbpresent">
              <li onClick={() => setActiveTab('Descrioption')} role='button'>Descrioption</li>
              <li onClick={() => setActiveTab('specification')} role='button'>specification</li>
              <li onClick={() => setActiveTab('Reviews')} role='button'>Reviews(124)</li>
              <li onClick={() => setActiveTab('Shipping')} role='button'>Shipping & Returns</li>
            </ul>
          </div>
          <div className="col-12 col-md-5 ">
            {activeTab === 'Descrioption' && (
              <p> {product.description}</p>

            )}

            {activeTab === 'specification' &&
              <>
                <p>Brand: {product.brand}</p>
                <p>Processor: {product.model}</p>
                <p>Memory: 16GB</p>
                <p>Storage: 512GB</p>
              </>
            }

            {activeTab === 'Reviews' && (
              <>
                <h4>Customer Reviews</h4>

                <p><Star price={product.price} /></p>

                <p>
                  Great product with excellent quality.
                </p>

                <p>
                  Very satisfied with my purchase.
                </p>
              </>
            )}

            {activeTab === 'Shipping' && (
              <>
                <h4>Shipping & Returns</h4>

                <p>
                  Free shipping on orders over $50.
                </p>

                <p>
                  You can return your product within 30 days.
                </p>
              </>
            )}

          </div>
        </div>
      </div>

    </>
  )
}
