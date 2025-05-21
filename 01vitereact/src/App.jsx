//import { useState } from 'react'
import Name from "./learn"
const ReactElement ={//this is a way in which react works internally when we react.create() and covert this into 
  type:'a',
  props:{
      href:"https://google.com",
      target:'_blank'
  },
  childern:'Click me to visit google:'
}

function App() {

  return (
    <>
    <h1>Chai aur react with vite | Ravi Tiwari!!</h1>
    <Name />
    </>
    
  )
}

export default App
