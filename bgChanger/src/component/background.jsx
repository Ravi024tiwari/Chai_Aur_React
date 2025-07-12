import React from "react";
import "../App.css"
function Btn({name,onClick}){
    return(
        <div>
            <button onClick={onClick} style={{backgroundColor:name ,margin:3 ,padding:10, borderRadius:14}}>{name}</button>
        </div>
    )
}
export default Btn;