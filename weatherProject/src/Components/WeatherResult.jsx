import React, { useContext } from "react";
import WeatherContext from "../Contexts/WheatherContext";

function WeatherResult(){
    const {data,setData} =useContext(WeatherContext)

    return(
        <div style={{margin:"10px",padding:"5px", backgroundColor:"grey"}} className="card">
           {data && data.location  && data.current.condition ?( <div>
            <img style={{height:"100px",width:"100px"}} src={data.current.condition.icon}></img>
                <h3>City Name:{data.location.name}</h3>
                <h3>Region:{data.location.region}</h3>
                <h3>Country:{data.location.country}</h3>
                <h3>Condition:{data.current.condition.text}</h3>
            </div> ):(
                <div>
                    <h2>No weather data available. Please search for a city.</h2>
                </div>
            )}
        </div>
    )
}

export default WeatherResult;