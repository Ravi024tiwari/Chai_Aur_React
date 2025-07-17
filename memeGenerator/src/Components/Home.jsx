import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Home(){
    const navigate =useNavigate();
    const handleMeme =()=>{
       navigate("/card")
    }
    return(
        <div className="Home">
            <h1>Generate the Random Meme..</h1>
           <NavLink to="/card" style={{color:"white" ,margin:"10px",padding:"5px",textDecoration:"none",height:"30px",width:"100px",backgroundColor:"green"}}>Get Memes</NavLink>
        </div>
    )
}

export default Home;