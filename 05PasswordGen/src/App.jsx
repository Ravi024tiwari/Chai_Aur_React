import { useState,useCallback,useEffect,useRef } from 'react'
//import './App.css'

function App() {
  const [length, setLength] = useState(8)//this is state variable with default value
  const [numberAllowed ,setNumberAllowed] =useState(false);
  const [character,setCharacter] =useState(false);//this state for the character in ui show change

  //updation of password in the input value
  const [password,setPassword] =useState("")//here we generate the password//these pass should used as a vari state change

  //now we take the ref hook
  const passRef =useRef(null);//default ref of given component
  //whe have to pass the ref where we want to make the ref 

  //here we generate the password generator method
  //here this passwordGenerator method is always called when we add Number or character into the password 
  //we haveto use the HOOk (useCallBack->cache to reuse to call on each dependency change and render the password on ui)
  const  passwordGenerator =useCallback(()=>{
      let pass ="";
      let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";//from here we generate password
      //here we got condition
      if(numberAllowed) str +="0123456789";//this should be add in str from where we make password
      if(character) str +="@$%&?<>"//for special char we want //if these dependencies are true
      
      //here its make a variable state length of password
      for(let i=0;i<=length;i++){
        let idx =Math.floor(Math.random()*str.length+1);//here we generate the password at different condition bc
        //in each callBack it refresh from memoization
        pass +=str.charAt(idx);//this will generate the password 
      }

      setPassword(pass);//here it get set the password which it generate that//here we read that value
  },[character,numberAllowed,length,setPassword])//password will generate if any one of the dependencies get change

  //now use of useEffect
  //any one of the dependecy should change then its call or we can say 
  useEffect(()=>{
      //here we call the password generator to call then
      passwordGenerator();
  },[character,length,numberAllowed,passwordGenerator])//in depndies ke change hone par call hoga

  //now make the method to copy the password
  const copyPasswordToClipBoard =useCallback(()=>{
     passRef.current?.select();//it select the copied text on the clipboard //its select the clipboard 
      window.navigator.clipboard.writeText(password);//its copy the clipboard of passwor
  },[password])//kyuki mai optimise krna chata hu and sirf passwrd pe hi dependies hai

  return (
    <>
      <div className='w-full max-w-md-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 p-4'
      >PassWord Generator:
        <div className='flex shadow rounded-lg overflow-hidden mb-4 items-center'>
          <input type='text' value={password} placeholder='Type Password'
          className='outline-none w-full py-1 px-3 my-3 rounded-md h-10 text-center'
          readOnly
          ref={passRef}></input>
          <button className='bg-blue-400 px-3 py-0.5 shrink-0 h-11 rounded-md'
           onClick={copyPasswordToClipBoard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-6'>
           <div className='flex items-center gap-x-1'>
            <input type='range' 
             min={8}
             max={100}
             value={length}
             className='cursor-pointer font-bold'
             onChange={(e)=>
             setLength(e.target.value)}//here we do two thing on
              ></input>
              <label >Length:({length})</label>
           </div>
           <div className='flex items-center gap-x-1'>
             <input type='checkBox'
            defaultChecked ={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((pre)=>!pre)
            }}
            className=''></input>
            <label htmlFor='numberInput'>Number</label>
           </div>
           <div className='flex items-center gap-x-1'>
             <input type='checkBox'
            defaultChecked ={character}
            id='characterInput'
            onChange={()=>{
              setNumberAllowed((pre)=>!pre)
            }}
            className=''></input>
            <label htmlFor='characterInput'>Character</label>
           </div>
        </div>
      </div>
      
    </>
  )
}

export default App
