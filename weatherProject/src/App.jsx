import { useState } from 'react'
import './App.css'
import WeatherResult from './Components/WeatherResult'
import WheatherComp from './Components/WheatherComp'
import WeatherContextProvider from './Contexts/ContextProvider'
function App() {

  return (
    <WeatherContextProvider >
      <div>
      <h1>Weather Api Project with Context Api..</h1>
      <WheatherComp />
      <WeatherResult />
    </div>
    </WeatherContextProvider>
    
  )
}

export default App
