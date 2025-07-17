import React, { useContext, useState } from "react";
import WeatherContext from "../Contexts/WheatherContext";

function WheatherComp(){
    const {city,setCity} =useContext(WeatherContext)
    const [inputCity,setInputCity] =useState("")
    //now here we make their input to take value form the user
    //now here manage the city with their value
    const handleClick =()=>{
        setCity(inputCity);//here we set the value of city in city
    }
    return(
        <div >
          <div>
            <h1>Welcome to the Weather Related data...</h1>
            <span>
                <input type="text" placeholder="Enter your city name" value={inputCity}
                onChange={(e)=>setInputCity(e.target.value)} style={{padding:"5px",margin:"5px",height:"20px",fontSize:"1.2rem",fontFamily:""}}/>
                <button onClick={handleClick}>Search</button>
            </span>
          </div>
        </div>
    )
}
export default WheatherComp;