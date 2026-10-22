
function Services({title , des , icon}) {
    return (
        <>
            <div className="services-box col-12 col-md-4 col-lg-3 text-center my-3  bg-light rounded-2 d-flex  flex-column justify-content-between shadow-sm" >
                <i className={`ri-${icon}-line  text-primary`}></i>
                <div className="service-content d-flex flex-column text-center">
                    <h2 className="service-box-title fs-4 ">{title}</h2>
                    <p className="service-box-des text-muted  ">{des}</p>
                </div>
            </div>

                    
        </>
    )
}

export default Services
