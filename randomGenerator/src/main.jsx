import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//remove the strict mode to remove from twice fetcing the apis
createRoot(document.getElementById('root')).render(

    <App />
)
