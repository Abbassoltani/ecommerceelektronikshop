
function Team({name , position, img}) {
  return (
    <>
               <div className="team-section-props col-12 col-md-6 col-lg-4 ">
                    <div className="team-wrapper d-flex flex-column align-items-center text-center">
                        <div className="team-wrapper-box ">
                        <img src={img} alt="" />

                        </div>
                        <span className="team-name d-block">{name}</span>
                        <span className="team-job ">{position}</span>
                    </div>
                </div>
    </>
  )
}

export default Team
