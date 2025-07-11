import { useState } from 'react'
import React from 'react'
import Chai from "./chai.jsx"

function App() {
//making of custom react
const customReact =React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  "click me to visit google.."
)
  return (
    <>
      <h1>Chai aur Code...</h1>
      <Chai />
    </>
  )
}

export default App
