import React from "react";
import useFetch from "../hooks/dataFetch";

function CommentInfo(){
const commentData =useFetch("comments")
    //now make loop of postDATa length and put on the ui
return(
<div>
    {commentData.slice(0,5).map((dt) => (
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
export default CommentInfo;//here we export this data
//its will give the comment info from the api