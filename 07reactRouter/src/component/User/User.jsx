import React from "react";
import { useParams } from "react-router-dom";
function User(){

    const {username }=useParams();//here we fetch tha value which passed from the Link
    return(
<div>
    <h1>UserName:{username}</h1>
</div>
    )
}
export default User;