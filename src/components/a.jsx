import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const productsData = [
    {
        id: 1,
        title: 'Apple Airpods Pro (2nd Gen) with MagSafe Charging Case',
        price: '175,50 $',
        oldPrice: '195,00 $',
        discount: '-10%',
        rating: 4,
        reviews: 3,
        image: './assets/airpods.png',
        buttonText: 'Add To Cart'
    },
    {
        id: 2,
        title: 'J.P.Gold Wireless Stereo Earphones Headphone',
        price: '19,00 $',
        oldPrice: '20,00 $',
        discount: '-5%',
        rating: 5,
        reviews: 4,
        image: './assets/headphones.png',
        buttonText: 'Add To Cart'
    },
    {
        id: 3,
        title: 'Laview Home Security Camera HD 1080p',
        price: '35,00 $',
        oldPrice: null,
        discount: null,
        rating: 4,
        reviews: 4,
        image: './assets/camera.png',
        buttonText: 'Customize'
    }
];

function ProductsCard() {
    const [activeTab, setActiveTab] = useState('Basic Phones');

    return (
        <div className="product-card-section my-4">
            <div className="container">
                <div className="row g-4 align-items-stretch">

                    {/* بنر سمت چپ */}
                    <div className="col-12 col-md-4 col-lg-3">
                        <div className="banner-card position-relative rounded-3 p-4 d-flex flex-column justify-content-between h-100 overflow-hidden" style={{ backgroundColor: '#F5EFE6' }}>
                            <div className="banner-content z-1">
                                <span className="text-uppercase text-muted fw-semibold small">Up to 30% OFF</span>
                                <h3 className="fw-bold mt-1 text-dark fs-4">
                                    iWatch Series 9<br />Powerful Sensors!
                                </h3>
                                <a href="#" className="text-dark fw-bold text-decoration-underline d-inline-block mt-2">
                                    Shop Now
                                </a>
                            </div>
                            <div className="banner-img text-center mt-3">
                                <img src="./assets/productcard1.jpg" alt="iWatch" className="img-fluid" style={{ maxHeight: '220px', objectFit: 'contain' }} />
                            </div>
                        </div>
                    </div>

                    {/* بخش اسلایدر و تب‌ها */}
                    <div className="col-12 col-md-8 col-lg-9">
                        {/* تب‌ها */}
                        <div className="product-category border-bottom pb-2 mb-3">
                            <ul className="nav justify-content-end gap-4 list-unstyled mb-0 pe-2">
                                {['Basic Phones', 'Smart Watches', 'Speaker'].map((tab) => (
                                    <li key={tab} className="nav-item">
                                        <button
                                            className={`btn p-0 pb-2 rounded-0 border-0 fw-bold fs-6 ${activeTab === tab ? 'text-dark border-bottom border-2 border-dark' : 'text-muted'
                                                }`}
                                            onClick={() => setActiveTab(tab)}
                                            style={{ background: 'none' }}
                                        >
                                            {tab}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* اسلایدر Swiper */}
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={16}
                            slidesPerView={1}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                576: { slidesPerView: 2 },
                                992: { slidesPerView: 3 }
                            }}
                            className="py-1"
                        >
                            {productsData.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <div className="card h-100 border-0 bg-transparent">
                                        {/* تصویر محصول */}
                                        <div className="position-relative bg-light rounded-3 p-3 text-center d-flex align-items-center justify-content-center" style={{ height: '220px' }}>
                                            {product.discount && (
                                                <span className="badge bg-danger position-absolute top-0 start-0 m-2 px-2 py-1 fs-7 fw-normal">
                                                    {product.discount}
                                                </span>
                                            )}
                                            <img src={product.image} alt={product.title} className="img-fluid" style={{ maxHeight: '160px', objectFit: 'contain' }} />
                                        </div>

                                        {/* جزئیات کارت */}
                                        <div className="card-body px-0 pt-3 d-flex flex-column justify-content-between">
                                            <div>
                                                <h6 className="card-title text-dark fw-medium lh-sm text-truncate-2" style={{ fontSize: '0.9rem', height: '2.6em', overflow: 'hidden' }}>
                                                    {product.title}
                                                </h6>

                                                {/* امتیاز */}
                                                <div className="star-content my-2 d-flex align-items-center gap-1 text-warning fs-7">
                                                    {[...Array(5)].map((_, i) => (
                                                        <i key={i} className={`ri-star-${i < product.rating ? 'fill' : 'line'}`}></i>
                                                    ))}
                                                    <span className="text-muted ms-1 fs-7">({product.reviews})</span>
                                                </div>

                                                {/* قیمت */}
                                                <div className="d-flex align-items-center gap-2 mb-3">
                                                    {product.oldPrice && (
                                                        <span className="text-muted text-decoration-line-through small">{product.oldPrice}</span>
                                                    )}
                                                    <span className="fw-bold text-dark fs-6">{product.price}</span>
                                                </div>
                                            </div>

                                            {/* دکمه افزودن */}
                                            <button className="btn btn-light w-100 fw-semibold text-secondary py-2 border-0" style={{ backgroundColor: '#f0f0f0' }}>
                                                {product.buttonText}
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductsCard;