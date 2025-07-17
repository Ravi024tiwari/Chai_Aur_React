import { useContext, useState } from 'react'
import './App.css'
import CounterContextProvider from './contexts/ContextProvider'
import CounterContext from './contexts/CounterContext'
import First from './components/First'


const Display =()=>{
     const {counter,setCounter} =useContext(CounterContext);//here we find theri value
     return <h1>Counter is:{counter}</h1>
  }
function App() {
  

  //the use of ContextProider must be inside 
  return (
    <div>
        <CounterContextProvider>
  <Display />
   <First />
   <First />
   <First />
    <First />
  </CounterContextProvider>
    </div>
  
  )
}

export default App
