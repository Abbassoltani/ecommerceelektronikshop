import React, { useContext, useState } from 'react'
import LanguageContext from '../context/LanguageContext'
import translations from '../context/translations'

function Topbar() {


const {language , setLanguage}=useContext(LanguageContext)


const languages = {
    de: { name: 'Deutsch', flag: 'de' },
    en: { name: 'English', flag: 'gb' },
    fr: { name: 'Français', flag: 'fr' },
    es: { name: 'Español', flag: 'es' },
    it: { name: 'Italiano', flag: 'it' },
    pl: { name: 'Polski', flag: 'pl' }
}

    return (
        <>
            <div className="topbar py-2 d-none d-lg-block">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-6 ">
                            <p className="topbar-text">{translations[language].topbarOffer}</p>
                        </div>

                        <div className="col-md-6 d-flex justify-content-lg-end">
                           <div className="languge ">
                            <ul className="d-flex">
                                <li className='d-flex gap-2 dropdown position-relative'>
                                    <span className={`fi fi-${languages[language].flag}`}></span>
                                    <a href="#" className="nav-link dropdown-toggle" id='dropdownMent' aria-expanded='false'
                                    role='button' data-bs-toggle='dropdown'
                                    >{`${languages[language].name}`}</a>
                                    <ul className="flag dropdown-menu position-absolute" id='dropdownMenu'>
                                        <li className="dropdown-item" type='button' onClick={()=>setLanguage('en')}><span className="fi fi-gb-eng me-2"></span> English <hr className="dropdown-divider" /></li>
                                        <li className="dropdown-item" type='button' onClick={()=>setLanguage('fr')}><span className="fi fi-fr me-2"></span> Francais <hr className="dropdown-divider" /></li>
                                        <li className="dropdown-item" type='button' onClick={()=>setLanguage('es')}><span className="fi fi-es me-2"></span> Espanol <hr className="dropdown-divider" /></li>
                                        <li className="dropdown-item" type='button' onClick={()=>setLanguage('de')}>  <span className="fi fi-de me-2"></span>deutsch <hr className="dropdown-divider" /></li>
                                        <li className="dropdown-item" type='button' onClick={()=>setLanguage('it')}><span className="fi fi-it me-2"></span> Italiano <hr className="dropdown-divider" /></li>
                                        <li className="dropdown-item" type='button' onClick={()=>setLanguage('pl')}><span className="fi fi-pl me-2"></span> Polski <hr className="dropdown-divider" /></li>
                               
                                    </ul>
                                </li>
                            </ul>

                           </div> 
                            <span className='mx-4 '>|</span>

                            <ul className='cash' >
                                <li className="dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" id='dropdownMent' role='button' data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                    
                                    > $ USD</a>
                                    <ul className="cash dropdown-menu">
                                        <li className="dropdown-item">EUR € <hr className="dropdown-divider" /></li>
                                        <li className="dropdown-item">USD $ </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Topbar
