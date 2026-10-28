import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router"
import { AuthProvider } from './contexts/AuthContext'
import './main.scss'
import App from './App.jsx'
import CookieBar from './components/CookieBar.jsx'

createRoot(document.getElementById('root')).render(
<StrictMode>
    <BrowserRouter>
    <>
        <CookieBar />
        <AuthProvider>
            <App /> 
        </AuthProvider>
    </>
    </BrowserRouter>
</StrictMode>,
)
