
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'
import { LanguageProvider } from './context/LanguageContext.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<>
<BrowserRouter>
<LanguageProvider>
    <App />

</LanguageProvider>

</BrowserRouter>
</>

)
