import React, { useEffect, useState } from "react";
import WeatherContext from "./WheatherContext";

//if i here fetch the data from the api and send its value as a Global Context Props 
//then its fetched by all other Component 

function WeatherContextProvider({children}){
    const [data,setData] =useState({});//initially its null object
    const [city,setCity] =useState("");//initialyy its blank
    useEffect(()=>{
        if(city!==""){
            fetch(`https://api.weatherapi.com/v1/current.json?key=b59c35a68b0941dfbdf141442251507&q=${city}&aqi=no`)
        .then((res)=>res.json())
        .then((res)=>{
            console.log("The api res is:",res);
            setData(res)
        })
        }
        else{
            setData({})
            return;
        }
        

    },[city])
    return(
        <WeatherContext.Provider value={{data,setData,city,setCity}}>
            {children}
        </WeatherContext.Provider>
    )
}
export default WeatherContextProvider