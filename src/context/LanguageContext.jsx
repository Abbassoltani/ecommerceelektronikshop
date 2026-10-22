import { createContext, useState } from "react";



const LanguageContext=createContext()



export function LanguageProvider({children}){

    const [language , setLanguage]=useState('de')


    return (
        <LanguageContext.Provider value={{language , setLanguage}}>

            {children}
        </LanguageContext.Provider>
    )



}



export default LanguageContext