import { useState } from 'react'

import './App.css'
import './index.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const num =[1,2,3,4]

  return (
   <>
      <Card channel ="chaiaurCode"/>
      <Card channel ="chaiaurReact" newArr={num}  />
   </>
  )
}

export default App
