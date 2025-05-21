import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import Name from './learn.jsx'

const anotherElement =(
  <a href='https://google.com' target='_blank'>Visit Google</a>//its directly render on browser
)
//now make a React Elment //this will directly render
const reactElement =React.createElement('a',//it will directly render on object to show it without using costom render
  
  {href:'https://google.com',
  target:'_blank'
  },
'click me to visit Google!!')


createRoot(document.getElementById('root')).render(//this createroot from index.html 

  reactElement
)
