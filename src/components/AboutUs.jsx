import { Link } from "react-router-dom"

function AboutUs() {
    return (
        <>
            <div className="about-section my-5 p-3">
                <h5 className='text-center aboutus-title'>About Us</h5>
                <hr />
                <div className="row w-100 justify-content-center align-items-center">
                    <div className=" col-12 col-md-12 col-lg-6">
                        <img src="/assets/aboutus.png" alt="" className="img-fluid aboutus-img" />
                    </div>
                    <div className="about-right col-12 col-md-12 col-lg-6">
                      
                      <p className="aboutus-des">
  Welcome to <strong>Nextify</strong>, your destination for modern technology and electronics.
  We offer a wide range of <strong>quality products</strong>, from computer components to everyday gadgets,
  helping you find the right products for your needs and budget.
  At Nextify, we value <strong>reliability</strong>, <strong>transparency</strong>, and
  <strong> customer satisfaction</strong>.
</p>

             

                       
                   <Link to='/products'>
                    <button className="btn btn-success p-3 w-100">All Product</button>
                   
                   </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
