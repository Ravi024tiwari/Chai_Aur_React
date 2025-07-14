import { useState } from 'react'
import './App.css'
import BioGenerator from './components/RandomData'
function App() {

  return (
    <div>
      <h1>Random User Generator...</h1>
      <BioGenerator />
    </div>
  )
}

export default App
