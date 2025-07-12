import { useState } from 'react'
import Counter from './compnents/counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Counter Problem Conceptss..</h1>
     <Counter />
    </>
  )
}

export default App
