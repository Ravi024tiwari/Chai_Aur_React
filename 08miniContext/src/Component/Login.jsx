import React, { useContext, useState } from "react";
import userContext from "../context/UserContext";

function Login(){
    const [username,setUsername] =useState("")
    const [password,setPassword] =useState("")

    //now we use the useContext to fetch the value

    const {setUser} =useContext(userContext)//here we get the context for Login from the UserContext
    //which we want to pass the value...

    const handleSubmit =(e)=>{
        e.preventDefault();
        setUser({username,password})
        //here we send the data from the props by using of useContext
    }
    return(
        <div>
            <h2>Login page..</h2>
            <input
             type="text" 
             placeholder="username" 
             value={username}
             onChange={(e)=>setUsername(e.target.value)} />
            
            <input
             type="password"
              placeholder="Enter password" 
              value={password}
              onChange={(e)=>setPassword(e.target.value)} />

              <button onClick={handleSubmit} >Submitt</button>
        </div>
    )
}

export default Login;