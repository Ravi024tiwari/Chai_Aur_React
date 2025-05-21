import { useState,useEffect } from 'react'//Hooks 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CounterProject } from './01Project.jsx'


function App() {
  //UseState ::
let [counter ,setcounter] = useState(15)//the setCouter should be in camelCase
//now we learn the use of react
const handleClick =()=>{
  counter =counter +1;//here we update the counter and then pass on setCounter to update the value
  setcounter(counter);//in each click we return the update value of counter on ui
  console.log(counter);
}
const removeValue =()=>{
  counter--;//here we firstly decrease the value and then 
  setcounter(counter);//and then we update the value on the UI by calling setCouter
}
  return (
   /* <>
      
      <h1>Chai aur React ..Learing the need of hooks</h1>
      <h2>Counter value :{counter}</h2>
      <button onClick={handleClick}>Add value</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>*/
    <>
    <CounterProject/>
    </>
  )
}

export default App
