import React, { useState } from "react";
import userContext from "./UserContext";

const UserContextProvider =({children})=>{//here we pass the pops to that context which we want to drilling
    const [user,setUser] =useState(null)
    //now in user we have context of password and username of Login by using context so from here 
    //any one of the Component fetched the data directly
    return (
        <userContext.Provider value={{user,setUser}}>
            {children}
        </userContext.Provider>
    )
}
export default UserContextProvider;