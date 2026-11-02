import { Link } from "react-router-dom"



export default function Info() {
  return (
    <>

          <section className="info ">
        <div className="container d-flex align-items-center">
          <div className="info-content" >
            <p>UP TO 25% DISCOUNT!</p>
            <h1 className='my-4'>Stable Bluetooth 5.0
              Ultimate Sound Experience</h1>
              <Link to='/products'>
              
              <button className="btn btn-danger">Shop Now <i className="ri-arrow-right-s-line"></i></button>
              </Link>
          </div>
        </div>
      </section>
      
    </>
  )
}
