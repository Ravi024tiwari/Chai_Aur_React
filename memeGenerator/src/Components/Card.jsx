import React, { useEffect, useState } from "react";
function Card(){
    const [usMeme,setUsMeme] =useState(null)
    useEffect(()=>{
       fetch(`https://api.imgflip.com/get_memes`)
     .then((res)=> res.json())
     .then((res)=>{
        const memes =res.data.memes;
        //here we set one of the random data from the Data
        const randomIdx =Math.floor(Math.random()*memes.length);//get rndom idx
        setUsMeme(memes[randomIdx]);//setThat meme on rndomly
     })

    },[])
    const refreshMeme =()=>{
        window.location.reload();
    }
    return(
        <div className="Meme-parent">
            {usMeme && <div className="meme-Card">
                <div className="meme-image">
                    <img src={usMeme.url} id="meme-img"/>
                </div>
            
            <h2>{usMeme.name}</h2>
            <button onClick={refreshMeme} id="refresh">Get new Meme</button>
        </div>}
        </div>
       
    )
}
export default Card;