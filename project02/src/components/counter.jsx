import React ,{useState} from "react";

function Counter(){
    let [counter,setCounter] =useState(0);//this one is the inital value
    const increase =()=>{
        setCounter(counter=>counter+1);//we update this as a value
        setCounter(counter=>counter+1)
        setCounter(counter=>counter+1)
    }
    const decrease =()=>{
        setCounter(counter-1);
    }
    return (
        <div>

        <h1>Counter :{counter}</h1>
        <p>{counter%2==0 ?"Even" :"Odd"}</p>
        <button onClick={increase}>Add value:{counter}</button>
        <br/>
        <button onClick={decrease}>Decrease value:{counter}</button>
        </div>
        
    )
}
export default Counter;