import React from "react";
import useFetch from "../hooks/dataFetch";

function PostInfo(){
    const postData =useFetch("posts")
    //now make loop of postDATa length and put on the ui
return(
<div>
    {postData.slice(0,5).map((dt) => (
        <div key={dt.id} style={{border:'3px solid black',margin:'.5rem',borderRadius:'14px'}}>
          <h3>UserId:{dt.userId}</h3>
          <h3>id:{dt.id}</h3>
          <p>{dt.title}</p>
          <p>{dt.body}</p>
        </div>
      ))}
</div>
    )
}
export default PostInfo;//here we export this data