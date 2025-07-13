import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
const [length,setLength] =useState(0);
const [numberAllowed,setNumberAllowed] =useState(false);
const [char,setChar] =useState(false);//here initially no number or char will be taken
const [password,setPassword] =useState("");//here the default generte
 //here we use RefHook to make ref 
 const passwordRef =useRef(null);
const passwordGenerator = useCallback(()=>{//from here we generate the password and cache them as a memoization rule
 let pass ="";
 let str ="QWERTYUIOPLKJHGFDSAZXCVBNMqwwertyuioplkjhgfdsazxcvbnm";
 if(numberAllowed) str +="0123456789";
 if(char) str+="!@#$%^&*?><";//if char will allowed in paassword to gnerae the password

 //now we generate the passwors..
 //now we make the pass or random char of the given lenght
 for(let i=1;i<=length;i++){
  let randomIdx =Math.floor(Math.random()*str.length+1);//its teh random possibel index froms str
  pass +=str[randomIdx];//here we geneate that password from that string
 }

 setPassword(pass);//its set teh password
},[length,numberAllowed,char,setPassword])

//now we have to call that function if any of {length,num,char will change}
useEffect(()=>{
  //its allways call the gnerae password
  passwordGenerator();//here its call from here 
},[length,numberAllowed,char,passwordGenerator])

//now make the copy of clipBoard 
const copyPasswordToClipBoard =useCallback(()=>{
  passwordRef.current?.select();//use ref is use to show that text is selected from the clipboard
    window.navigator.clipboard.write(password);
},[password]);//its depend on password
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
        />
        <button 
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
      </div>
  )
}

export default App
