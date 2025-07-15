import React, { useContext } from "react";
import userContext from "../context/UserContext";
//here we have to fetch the data from the userContext 

function Profile(){
    //firslty fetched data of Login from the userContext
    const {user} =useContext(userContext)//here we fetch that //jha se hame value fetch
    //krni hai
    if(!user){// we will return from here not go downward of code..
        return(
            <>
            <h2>Please Login..</h2>
            </>
        )
    }
    else{
        return(
        <div>
            <h1>Profile ....</h1>
            <h2>Welcome...</h2>
            <h3>Username:{user.username}</h3>
        </div>
    )
    }
    
}

export default Profile;