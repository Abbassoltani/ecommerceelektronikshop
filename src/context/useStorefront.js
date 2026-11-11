
import { useContext } from "react";
import LanguageContext from "./LanguageContext";
import data from '../products.json'


function useStorefront() {

    const { language, setLanguage } = useContext(LanguageContext)

    const t = (section, key) => {
            const translations = data.storefront.translations[section]?.[key]
            return translations?.[language] || translations?.en || key
    }

    

    return {
        language,
        setLanguage,
        t
    }
}

export default useStorefront


