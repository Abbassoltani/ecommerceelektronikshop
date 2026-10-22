import { useCallback, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { products } from './../products.json'
import translations from '../context/translations'
import LanguageContext from '../context/LanguageContext'
import Topbar from './Topbar'

function Navbar() {
    const [wishlistBox, setWishlistBox] = useState(() => {
        return JSON.parse(localStorage.getItem('wishlist')) || []
    })
    const [cartBox, setCartBox] = useState(() => {
        return JSON.parse(localStorage.getItem('cart')) || []
    })
    const [inputValue, setInputValue] = useState('')
    const [category, setCategory] = useState('All Category')
    
    // اضافه کردن state برای مدیریت باز و بسته شدن منو در موبایل
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navigate = useNavigate()
    const { language } = useContext(LanguageContext)

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

    const updateCartbage = useCallback(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || []
        setCartBox(cart)
    }, [])

    const updateWishlistbage = useCallback(() => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
        setWishlistBox(wishlist)
    }, [])

    useEffect(() => {
        window.addEventListener('wishlistUpdate', updateWishlistbage)
        window.addEventListener('cartUpdate', updateCartbage)

        return () => {
            window.removeEventListener('wishlistUpdate', updateWishlistbage)
            window.removeEventListener('cartUpdate', updateCartbage)
        }
    }, [updateCartbage, updateWishlistbage])

    const filteredCategory = [...new Set(products.map(item => item.category))]
    const liveSearch = products.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase().trim()))

    return (
        <>
        <div className="fixed-top bg-light">
        <Topbar/>
            <div className="navbar-top">
                <div className="container">
                    <div className="row w-100 justify-content-between align-items-center ">
                        <div className="col-lg-3">
                            <div className="nav-brand d-flex justify-content-center">
                                <Link to="/" className="navbar-brand">Nextify</Link>
                            </div>
                        </div>

                        <div className="col lg-6 nav-mittel border p-2 ">
                            <div className="row">
                                <div className="col-4 border-end">
                                    <select name="category" id="" className='form-select border-0' onChange={(e) => setCategory(e.target.value)}>
                                        <option value="All Category">All Category</option>
                                        {filteredCategory.map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-8 ">
                                    <div className="input-box position-relative">
                                        <label className='position-absolute end-0 translate-middle-y top-50'>
                                            <i className="ri-search-line" type='button' onClick={searchHandler}></i>
                                        </label>
                                        <input type="text" className="form-control border-0" placeholder='Search product hier ...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                                        {inputValue.trim() && (
                                            <div className="search-result">
                                                {liveSearch.map(item => (
                                                    <Link to={`/products/${item.id}`} className="" key={item.id} onClick={() => setInputValue('')}>
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
                            <div className="navbar-icon-wrapper mt-4 justify-content-center d-flex gap-4 align-items-center">
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

                                <div className="navbar-icon-item position-relative">
                                    <Link to='/cart'>
                                        <i className="ri-shopping-basket-line"></i>
                                    </Link>
                                    <span className="badge position-absolute top-0 start-50 rounded-5 translate-middle-y bg-black">
                                        {cartBox.reduce((total, number) => total + (number.quantity || 1), 0)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="nav navbar-expand-lg nav-menu">
                <div className="container">
                    {/* دکمه تورگل با قابلیت تغییر state */}
                    <button 
                        className="navbar-toggler text-center w-100"
                        type='button'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <i className="ri-menu-line"></i>
                    </button>

                    {/* اضافه کردن کلاس show بر اساس state */}
                    <div className={`navbar-collapse collapse ${isMenuOpen ? 'show' : ''}`} id='navbarNav'>
                        <div className="navbar-nav d-flex justify-content-center w-100">
                            <ul className="navbar-nav" onClick={() => setIsMenuOpen(false)}>
                                <li className="nav-item"><Link to="/" className="nav-link active">{translations[language].home}</Link></li>
                                <li className="nav-item dropdown"><Link to="" className="nav-link dropdown-toggle">{translations[language].shop}</Link></li>
                                <li className="nav-item"><Link to="" className="nav-link">{translations[language].category}</Link></li>
                                <li className="nav-item"><Link to="/products" className="nav-link">{translations[language].product}</Link></li>
                                <li className="nav-item"><Link to="" className="nav-link">{translations[language].topDeal}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Navbar