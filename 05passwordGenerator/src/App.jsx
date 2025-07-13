import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength] =useState(8);//its should be the initial value of length
  const [password,setPassword] =useState("");

  function handleChange(e){
     console.log(e.target.value);//fistly we console that event will happend by changing the range value
     setLength(Number(e.target.value))
  }
  
  let numberPassword ="0123456789";
  let smallChar ="qwertyuioplkjhgfdsazxcvbnmASDFGHJKLMNBVCXZQWERTYUIOP";
  let chars ="!@#$%^&*?><";//these are the different charcter
  
  useEffect(()=>{
    const generatePassword =()=>{
      let newPassword ="";//this always make new passwor
        for(let i=1;i<=length;i++){
          let randomNumber =Math.floor(Math.random()*smallChar.length)+1;//its radom index value of length
          newPassword +=smallChar[randomNumber];//its a random number
        }
        //after generating the password we addup their value of input

        //now we addup the number before setting the password
        const addNumber(){
          let numberCount =Math.floor(Math.random()*length)+1;//itna number password me addup krna hai
          for(let i=0;i<=numberPassword.length;i++){

          }
        }
        setPassword(newPassword);//update that password

    }
    generatePassword();//call the generate password when the value of length will change
  },[length])
 
  return (
    <>
     <h1 className='text-4xl text-center text-white'>Password Generator..</h1>
    <div className='box'>
       <div className='input-box'>
          <input type='text' placeholder='Enter password' value={password||""} style={{padding:2.5, height:40, width:500,borderRadius:14, textAlign:'center'}}></input>
          <button style={{backgroundColor:'blue',color:'black',cursor:'pointer'}}>copy</button>
       </div>
       <div className='input-change' >
        <div className='div-box'>
          <input type='range' min="0" max="100"  id="range" value={length} style={{height:35,width:100,margin:15}} onChange={handleChange}/>
        <label htmlFor='range'>Length({length})</label>
        </div>
        <div className='div-box'>
           <input type='checkbox' htmlFor="checkbox" style={{height:25,width:50,margin:5,padding:5}} onChange={addNumber} />
        <label id='checkbox' >Number</label>
        </div>
        <div className='div-box'>
          <input type='checkbox'   id='char' style={{height:25,width:50,margin:5,padding:5}}/>
        <label htmlFor='char'>Characters</label>
        </div>
        
    
       </div>
    </div>
     
    </>
  )
}

export default App
