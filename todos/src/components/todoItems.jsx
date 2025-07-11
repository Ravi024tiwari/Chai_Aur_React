import React from "react";

function TodoItems(props){
    return (
        <div>
           <li className="todo-items">
          <input type="checkbox"/> 
            <p>{props.name}</p>
            <p>....</p>
        </li>
        </div>
        
    )
}

export default TodoItems;