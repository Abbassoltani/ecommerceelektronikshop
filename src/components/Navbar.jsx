import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { products } from './../products.json'
import translations from '../context/translations'
import LanguageContext from '../context/LanguageContext'






function Navbar() {
      
    
    const [wishlistBox, setWishlistBox] = useState([])
    const [cartBox, setCartBox] = useState({})
    const [inputValue, setInputValue] = useState('')
    const [category, setCategory] = useState('All Category')

    const navigate = useNavigate()
    const {language} =useContext(LanguageContext)




    // const filtredSearch= inputValue && products.filter(item => item.category.toLowerCase().includes(inputValue.toLowerCase()))

    const searchHandler = () => {
        const params = new URLSearchParams()
        if (category) {
            params.set('category', category)
        }

        if (inputValue.trim()) {
            params.set('q', inputValue.trim())

        }
        navigate(`/products?${params.toString()}`)


    }


    useEffect(() => {

        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
        setWishlistBox(wishlist)
        const cart = JSON.parse(localStorage.getItem('cart')) || []
        setCartBox(cart)

    }, [])


    useEffect(() => {
        function updatebage() {
            const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
            setWishlistBox(wishlist)
            const cart = JSON.parse(localStorage.getItem('cart')) || []
            setCartBox(cart)
        }

        window.addEventListener('wishlistUpdate', updatebage)
        window.addEventListener('cartUpdate', updatebage)

        return () => {
            window.removeEventListener('wishlistUpdate', updatebage)
            window.removeEventListener('cartUpdate', updatebage)
        }



    }, [])

    const filteredCategory = [...new Set(products.map(item => item.category))]
    const liveSearch = products.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase().trim())) 





    return (
        <>
            <div className="navbar-top ">
                <div className="container">
                    <div className="row w-100 justify-content-between align-items-center ">
                        <div className="col-lg-3">
                            <div className="nav-brand d-flex justify-content-center">
                                <Link to="/" className="navbar-brand">SHOPIFY</Link>
                            </div>
                        </div>

                        <div className="col lg-6 nav-mittel  border p-2 ">
                            <div className="row">
                                <div className="col-4 border-end">
                                    <select name="category" id="" className='form-select border-0' onChange={(e) => setCategory(e.target.value)}>
                                        <option value="All Category">All Category</option>
                                        {filteredCategory.map(category => (
                                            <option value={category} >{category}</option>

                                        ))}






             <ul className="navbar-nav">
                        <li className="nav-item "><Link to="" className="nav-link active">Home</Link></li>
                        <li className="nav-item dropdown"><Link to="" className="nav-link dropdown-toggle ">Shop</Link></li>
                        <li className="nav-item"><Link to="" className="nav-link">Categories</Link></li>
                        <li className="nav-item"><Link to="" className="nav-link">Products</Link></li>
                        <li className="nav-item"><Link to="" className="nav-link">Top Deals</Link></li>
                        <li className="nav-item"><Link to="" className="nav-link">Elements</Link></li>
                    </ul> 




                                        {/* <option value="">shop</option>
                                        <option value="">Cameras</option>
                                        <option value="">Charger & Cabels</option>
                                        <option value="">Laptap & Computers</option>
                                        <option value="">Phones</option>
                                        <option value="">Smart Devieces</option>
                                        <option value="">TV & Speakers</option> */}
                                    </select>
                                </div>
                                <div className="col-8 ">
                                    <div className="input-box position-relative  ">
                                        <label className='position-absolute end-0 translate-middle-y top-50  ' ><i className="ri-search-line" type='button' onClick={searchHandler} ></i></label>
                                        <input type="text" className="form-control  border-0" placeholder='Search product hier ...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                                        {inputValue.trim() && (
                                            <div className="search-result">
                                                {liveSearch.map(item => (
                                                    <Link to={`/products/${item.id}`} className="" key={item.id} onClick={()=>setInputValue('')}>
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="col-lg-3">
                            <div className="navbar-icon-wrapper mt-4 justify-content-center  d-flex gap-4 justify-content-center align-items-center">
                                <div className="navbar-icon-item">
                                    <Link to='/login'>
                                    <i className="ri-user-line"></i>
                                    
                                    </Link>
                                </div>

                                <Link to='wishlist'>
                                    <div className="navbar-icon-item position-relative">
                                        <i className="ri-heart-line"></i>
                                        <span className="badge position-absolute top-0 start-50 rounded-5 translate-middle-y bg-black">{wishlistBox.length}</span>
                                    </div>
                                </Link>

                                <div className="navbar-icon-item position-relative ">
                                    <Link to='/cart'>
                                        <i className="ri-shopping-basket-line "></i>
                                    </Link>
                                    <span className="badge position-absolute top-0 start-50 rounded-5 translate-middle-y bg-black">{cartBox.length}</span>

                                </div>

                            </div>


                        </div>

                    </div>
                </div>


            </div>


            <div className="nav navbar-expand-lg nav-menu ">
     
                <div className="container">


                    <button className="navbar-toggler text-center w-100 "
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNav'
                        aria-controls='navbarNav'
                        aria-expanded='false'
                        aria-label='toggle navigation'
                    >

                        <i className="ri-menu-line"></i>
                    </button>

                    <div className="navbar-collapse collapse " id='navbarNav'>
                        <div className="navbar-conter d-flex justify-content-center w-100">

                            <ul className="navbar-nav">
                                <li className="nav-item "><Link to="/" className="nav-link active">{translations[language].home}</Link></li>
                                <li className="nav-item dropdown"><Link to="" className="nav-link dropdown-toggle ">{translations[language].shop}</Link></li>
                                <li className="nav-item"><Link to="" className="nav-link">{translations[language].category}</Link></li>
                                <li className="nav-item"><Link to="" className="nav-link">{translations[language].product}</Link></li>
                                <li className="nav-item"><Link to="" className="nav-link">{translations[language].topDeal}</Link></li>
                           
                            </ul> 
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Navbar
