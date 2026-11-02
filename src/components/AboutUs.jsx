import { Link } from "react-router-dom"

function AboutUs() {
    return (
        <>
            <div className="about-section my-5 p-3 text-center text-lg-start">

                <div className="row w-100 justify-content-center align-items-center">
                    <div className=" col-12 col-md-12 col-lg-6">
                        <div className="about-img w-100 h-100 overflow-hidden">
                            <img src="/public/assets/aboutus.png" alt="" />
                        </div>
                    </div>
                    <div className="about-right col-12 col-md-12 col-lg-6">
                        <h1 className="aboutus-title">About <span>Us</span></h1>
                        <span className="span-underline"></span>





                        <p className="aboutus-des">
                            Welcome to <strong>Nextify</strong>, your destination for modern technology and electronics.
                            We offer a wide range of <strong>quality products</strong>, from computer components to everyday gadgets,
                            helping you find the right products for your needs and budget.
                            At Nextify, we value <strong>reliability</strong>, <strong>transparency</strong>, and
                            <strong> customer satisfaction</strong>.
                        </p>
                        <div className="about-box-wrapper d-flex align-items-center justify-content-center ">
                            <div className="mx-5 about-icon d-flex flex-column align-items-center justify-content-center ">
                               <i class="fa-solid fa-shield-halved"></i>
                                <span className="text-center">Quality <br /> Products</span>

                            </div>
                            <div class="custum-divider" ></div>

                            <div className="mx-5 about-icon d-flex flex-column align-items-center justify-content-center ">
                                <i class="fa-regular fa-handshake"></i>
                                <span className="text-center">Tructed <br /> Services</span>

                            </div>
                            <div class="custum-divider" ></div>


                            <div className="mx-5 about-icon d-flex flex-column align-items-center justify-content-center ">
                                <i class="fa-regular fa-headphones"></i>
                                <span className="text-center">Customer <br /> Suport</span>

                            </div>

                        </div>




                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
