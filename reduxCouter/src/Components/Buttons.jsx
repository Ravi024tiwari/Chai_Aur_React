import React, { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { increasecount,deceaseCount } from '../feature/updateCounter';

function Buttons() {
    
    //now configOut the count and setcout from reducer manipulation
     const dispatch =useDispatch();
    const currValue =useSelector(state=>state.value);
     const incrment =()=>{
        dispatch(increasecount());//here we call that
      //   const currValue =useSelector(state=>state.value);
      //   setCount(currValue);
     }
     const decrement =()=>{
        dispatch(deceaseCount());//here we call that
   //      const currValue =useSelector(state=>state.value);
   //      setCount(currValue);
     }
  return (
    <div style={{backgroundColor:"orange"}}>
         <h1 style={{margin:"15px", padding:"5px"}}>Count:{currValue}</h1>
        <button style={{margin:"15px", padding:"5px"}} onClick={incrment}>Increase the Count..</button>
        <button style={{margin:"15px", padding:"5px"}} onClick={decrement}>Decrease the Count..</button>
    </div>
  )
}

export default Buttons