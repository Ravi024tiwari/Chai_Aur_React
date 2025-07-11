import React ,{useState,useEffect} from "react";

function Timer(){
    let [sec,setSec] =useState(0);
   
    useEffect(()=>{
   const id =  setTimeout(() => {
        setSec(sec=>sec+1);//here we update the second
     }, 1000);

    },[sec])
    return (
        <>
        <p>Start Timer:{sec}</p>
        {/* <button onClick={start}>Start Timer..</button>
        <button onClick={}>Stop Timer...</button> */}
        </>
        

    )
}

export default Timer;