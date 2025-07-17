import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from './Components/Home.jsx'
import Card  from './Components/Card.jsx';

//here we set that routes value
createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Routes >
     <Route path='/' element={<Home />}/>   
     <Route path='/card' element={<Card />}/>
</Routes>
</BrowserRouter>
)
