import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import LanguageContext from '../context/LanguageContext'
import translations from '../context/translations'


function Register() {

  // const [showLogin, setShowLogin] = useState(true)
  const navigate=useNavigate()
  const {language}=useContext(LanguageContext)
  return (
    <>



      <section className="login">
        <div className="row justify-content-center align-items-center w-100">

          <div className="col-12   ">
            <div className="login-input-wrapper d-flex position-relative">
              <button className="btn-close position-absolute  " onClick={()=>{
                // setShowLogin(false)
                navigate('/')
              }}></button>
              <p className="text-muted">{translations[language].loginDes}</p>
              <h1 className='login-title'>{translations[language].loginRegisterWord}</h1>
              <hr className='' />

              <div className="login-box position-relative w-75 my-3">
                <label className='position-absolute text-muted'>{translations[language].loginUser}</label>
                <input type="text" className="form-control " />
                <i className="ri-user-line position-absolute"></i>
              </div>

              <div className="login-box position-relative w-75 my-3">
                <label className='position-absolute text-muted'>{translations[language].loginPass}</label>
                <input type="text" className="form-control " />
                <i className="ri-lock-line position-absolute"></i>
              </div>
                         <div className="login-box position-relative w-75 my-3">
                <label className='position-absolute text-muted'>{translations[language].loginConfirmPass}</label>
                <input type="text" className="form-control " />
                <i className="ri-lock-line position-absolute"></i>
              </div>
                                 <div className="login-box position-relative w-75 my-3">
                <label className='position-absolute text-muted'>{translations[language].loginEmail}</label>
                <input type="text" className="form-control " />
                <i className="ri-mail-line position-absolute"></i>
              </div>





              <div className="login-box d-flex mt-1 w-75 align-items-center gap-5">
                <div className="d-flex">

                <input type="checkbox" className="form-check " />
                <label className=' text-muted fs-6'>{translations[language].loginRemember}</label>

                </div>

              <Link className='login-password-link'>{translations[language].loginForgetPassword}</Link>

              </div>
              <button className="btn btn-success mt-3">{translations[language].loginRegister}</button>

                    <h5 className="login-register-link text-muted">{translations[language].loginRegisterLogin}
                  <Link to='/login'>
                  {translations[language].loginTitle}
                  </Link>

              </h5>
            </div>

          </div>
        </div>
      </section>


    </>
  )
}

export default Register
