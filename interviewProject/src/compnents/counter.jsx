import React,{useEffect, useState} from "react";

function Counter(){
    const [counter,setCounter] =useState(0);//initially its zero
    //now we have to make the function such that to update the value
   const oneIncrease =()=>{
    setCounter(counter+1);//its update teh counter by one
   }
   const threeIncrease =()=>{
    setCounter(counter=>counter+1);//its update teh counter by one
    setCounter(counter=>counter+1);//its update teh counter by one
    setCounter(counter=>counter+1);//its update teh counter by one

   }
   //now decrease the counter
   const oneDecrease =()=>{
    setCounter(counter-1);//its update teh counter by one
   }
    return(
        <>
        <div className="counter">
            <h2>Increase in counter:{counter}</h2>
        <button onClick={oneIncrease}>increase by one..</button>
        <button onClick={threeIncrease}>increase by 3..</button>
        <button onClick={oneDecrease}>decrease by one..</button>
        </div>
        
        </>
    )
}

export default Counter;