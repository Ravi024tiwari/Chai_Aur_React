import React, { Children, useState } from "react";
import CounterContext from "./CounterContext";

//we have to make counter function by updating with context
function CounterContextProvider({children}){
    const [counter,setCounter] =useState(0)//initally its 
    return(
        <CounterContext.Provider value={{counter,setCounter}} >
            {children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider;