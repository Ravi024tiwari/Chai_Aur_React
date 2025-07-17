import { useState } from 'react'
import './App.css'
import Buttons from './Components/Buttons'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Buttons />
    </div>
  )
}

export default App
