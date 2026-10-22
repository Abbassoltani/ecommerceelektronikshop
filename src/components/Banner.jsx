

function Banner() {



  const bannerImage = [
    '/assets/ai1.png',
    '/assets/ai2.png',
    '/assets/ai3.png',
    '/assets/ai4.png',
    '/assets/ai5.png',
  ]


  return (
    <>
      <div className="banner-section  ">

        {bannerImage.map(img => (
          <>
            <div className=" bannerr  " >

              <img src={img} alt="" className='img-fluid banner-img' />

            </div>
          </>
        ))}

      </div>

    </>
  )
}

export default Banner
