
import Counter from './Counter'
function Banner() {
  
  return (
    <>
      <div className="container-fluid bg-primary experience-section">
        <div className="container">

          <div className="row justify-content-between px-4">
            <div className="col-lg text-center text-lg-start my-3">
              <div className="experience-info">
                <h3>Have 25 Years of Experinnce</h3>
                <p>Lorem sy dolor sit amet consectetur dipisicing elit. Blanditiis
                  d veniamte oribus eaque, a eque nulla.</p>
                <button className="btn btn-outline-info text-light">Get Started</button>

              </div>
            </div>






            <div className="col-12 col-lg-8 d-flex justify-content-center justify-contentlg-lg-end justify-content-md-center mt-md-4 mt-lg-0" >
              <div className="row  g-5   align-items-center justify-content-between ">


                <div className="col-12 col-md-4  d-flex justify-content-center  ">
                  <div className='experience-box text-center border p-1 d-flex flex-column align-items-center justify-content-center'>

                    <i class="ri-box-3-line"></i>
                    <div >
                      <Counter target={3456}/>
                      <h5 className="experience-title">Products Available</h5>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4    d-flex justify-content-center ">
                  <div className='experience-box text-center border p-1  d-flex flex-column align-items-center justify-content-center'>

                    <i class="ri-user-line"></i>
                    <div >
                       <Counter target={1682}/>
                      <h5 className="experience-title">Registered Users</h5>
                    </div>
                  </div>
                </div>


                <div className="col-12 col-md-4   d-flex justify-content-center  ">
                  <div className='experience-box text-center border p-1  d-flex flex-column align-items-center justify-content-center'>

                   <i class="ri-computer-line computer-icon"></i>
                    <div >
                      <Counter target={125}/>
                      <h5 className="experience-title">System Sold</h5>
                    </div>
                  </div>
                </div>









              </div>

            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default Banner
