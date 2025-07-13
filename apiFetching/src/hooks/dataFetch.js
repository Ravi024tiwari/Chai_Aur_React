import { useState,useEffect } from "react";

function useFetch(value){
    const [data,setData] =useState([]);//we  use the object to store that data

    useEffect(()=>{
     fetch(`https://jsonplaceholder.typicode.com/${value}`)//here we fetch that connected passed data from the 
     .then((res)=>res.json())//convert into json data
     .then((res)=>{
        setData(res)
        console.log(res)//consoling after converting in json format
     })//here we get that re
    },[value])

    return data;//from here we return that 
}

export default useFetch;//