import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const addCounter =()=>{
     setCount(count+1)//to update the count//but its on a single click its update only 1 value at a time
     setCount(count+1)//to update the count
     setCount(count+1)//to update the count
  }
  const subCounter =()=>{
    setCount(preCounter=>preCounter-1);//now in a single click its decrease 3 values
    setCount(preCounter=>preCounter-1);
    setCount(preCounter=>preCounter-1);

  }
  return (
   <>
   <h2>The counter value is :{count}</h2>
   <button onClick={addCounter}>AddCounter </button>
   <br/>
   <br/>
   <button onClick ={subCounter}>SubCounter</button>

   </>
  )
}

export default App
