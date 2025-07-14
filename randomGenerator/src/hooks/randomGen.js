import {useState,useEffect}from "react";

//we have to make a function such that to fetch it

function randomFetch(){
    const [data,setData] =useState({});//her we fetch them as a data
    useEffect(()=>{
    fetch('https://randomuser.me/api/')
   .then((res)=>res.json())
   .then((res)=>{
    setData(res.results[0])//its give the result data
    console.log(res.results[0])//fetch the response that we have from the api result
   })
    },[])//its a useEffect without any dependecy on it

    return data;//return that data from the rsponse
}

export default randomFetch;

