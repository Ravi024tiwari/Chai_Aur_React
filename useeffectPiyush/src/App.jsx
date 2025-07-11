import { useState,useEffect } from 'react'
import './App.css'
import Timer from './component/timer'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log("My App is Mounting firstly on uploadation...");
  },[])//the depency array is empty so its run only one time of mounting only...

  
  let usevalue =count;
  
const update =()=>{
  setCount(count+1);
}

useEffect(()=>{
  //after updation its comes here and update them
 usevalue =count;//when count will change then its use value also change with them
 console.log("The new value of usevalue:",count);

 return function(){
   console.log("This is UnMounting Count value..",count);
 }
},[count])

  return (
    <>
      <h1>SetCounter value:{count}</h1>
      <button onClick={update}>update Count</button>
    </>
  )
}

export default App
