import { useEffect,useState } from "react";//from the react-core

function useCurrencyInfo (currency){
  //our project is based on when we call an api its given its data of conversion then we 
  //have to convert that data and show on the ui by using state
  //when we pass the 'currency' in the argument its convert that into 
  //if we pass usd then its convert 1usd 82inr

  const [data,setData] =useState({});//its empty object to store the value of res objectt from the apicass

  useEffect(()=>{
  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
  .then((res)=>res.json())//convert the respone into json data form bc its in the string as a output
   .then((res)=>setData(res[currency]))//its given that object of that given result of the 
   //here we set the data value {} form in json data 
  },[currency])


  return data;//here we return data what we get the new data from the change value
}

export default useCurrencyInfo;//yha se hum data ko access kar sakte hai by using this variable