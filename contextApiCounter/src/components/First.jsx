import React from "react";
import { useContext } from "react";
import CounterContext from "../contexts/CounterContext";

function First(){
     const {counter,setCounter} =useContext(CounterContext);//here we find theri value
     //this value is fetched by useContext with passign the props value with different components
     const IncreaseCounter= ()=>{
            setCounter(counter+1);
     }
     //now we will decreae the count
    const DecreaseCounter= ()=>{
            setCounter(counter-1);
     }
    return(
        <div>
            <button style={{backgroundColor:"green", padding:"5px", margin:"10px"}} onClick={IncreaseCounter}>Increment</button>
            <button style={{backgroundColor:"red", padding:"5px", margin:"10px"}} onClick={DecreaseCounter}>Decrement</button>
        </div>
    )
}
export default First;