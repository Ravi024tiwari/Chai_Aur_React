import React, { useEffect, useState } from "react";

function Github(){
    const url ='https://api.github.com/users/hiteshchoudhary'
    const[data,setData] =useState({})//its for managing the github data from 
    let imgUrl =data.avatar_url;


    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>{
            setData(res);
            console.log(res);//here we fetch all the data from the url
        })
    },[])
    return(
   <div style={{backgroundColor:"grey",color:"white",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
    <div style={{margin:".5rem",padding:".5rem"}} >
        <img src={imgUrl} alt="Hitesh_Choudhary" style={{height:"10rem",width:"10rem", borderRadius:"25%"}}/>
    </div>
    <div style={{margin:".5rem", padding:".5rem" ,fontSize:"1.8rem"}}>
        <h1>UserName:{data.name}</h1>
        <h2>Followers:{data.followers}</h2>
    </div>
    <div>
        <p>{data.bio}</p>
    </div>
   

   </div>
    )
}
export default Github;