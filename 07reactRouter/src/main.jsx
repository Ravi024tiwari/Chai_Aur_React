import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import Home from './component/Home/Home.jsx'
import Github from './component/Github/Github.jsx'
import { Route } from 'react-router-dom'
import User from './component/User/User.jsx'

//Method:1 of Routing
//dynamic routing as well we understood by usng props
// const router =createBrowserRouter([
//   {
//     path:"/",//top level Element
//     element:<Layout />,
//     children:[
//       {
//         path:"",//this is Home router
//         element:<Home />
//       },
//       {
//         path:"/about",//this is for the about Page
//         element:<About />
//       },
//       {
//         path:"/contact",//This is for the contact Page
//         element:<Contact />
//       }
//     ]
//   }
// ])

//Method:2 of Routing..
const router =createBrowserRouter(
   createRoutesFromElements(
    <Route path="/" element={<Layout />}>
       <Route path ="" element={<Home />}/>
       <Route path ="/about" element={<About />}/>
       <Route path ="/contact" element={<Contact />}/>
       <Route path ="/github" element={<Github />}/>
        <Route path ="/user/:username" element={<User />}/>
    </Route>
   )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
