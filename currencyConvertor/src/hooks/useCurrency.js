import React,{useState,useEffect} from "react";

function useCurrencyInfo(currrency){
    const [data,setData] =useState({})//here we store the data of fetch call to store the data
    useEffect(()=>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currrency}.json`)
        .then((res)=>res.json())//convert into json
        .then((res)=>setData(res[currrency]))//here we store the data into setData
        //we will not use res.currency to fetch the value of data
        console.log(data)//to get the data value
        //data of that object currecy
    },[currrency])

    //here in CustomHook we rturn value 
    return data//at the end hum jab bhi ye hook call karenge to wha se data ko fetch karenge
}

export default useCurrencyInfo;