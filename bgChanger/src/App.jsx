import { useState } from 'react'
import Btn from './component/background'
import './App.css'

function App() {
  let [color,setColor] =useState("olive");//these are teh color
  //these are the  inital color

function changeColor(color){
//here how i fetch the background of ui and change their color
setColor(color);//here we update the color but we have to update the backgroun 
}
  return (
    <>
    <div className='color-box'>
   
    <div style={{ backgroundColor: color }} className='box' >
      <Btn name="red" onClick ={()=>changeColor("red")} />
      <Btn name="blue" onClick ={()=>changeColor("blue")}/>
      <Btn name="green" onClick ={()=>changeColor("green")}/>
      <Btn name="yellow" onClick ={()=>changeColor("yellow")}/>
      <Btn name="brown" onClick ={()=>changeColor("brown")}/>
    </div>
    </div>
    </>
  )
}

export default App
