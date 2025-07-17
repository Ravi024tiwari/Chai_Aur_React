import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { setTodos } from '../slice/apiSlice'//its not a default export form the components...
function ShowTodo() {
     const dispatch = useDispatch();
     const getTodo = useSelector((state)=>state.todo.todos)//here we get the todos list 
     console.log("The apiData is..",getTodo);
     //use of thunk middleware to handle the asynchrouns function call
     // thunk function
    const fetchTodos = () => {
    return  async (dispatch, getState) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    console.log("Data",data)

    dispatch(setTodos(data)); // dispatch normal action after fetch
    //isse kahte hai ki payload bheja gya after fetching thei
  };
};

     const handleApi =()=>{
        dispatch(fetchTodos())//here we fetched that api..or dispatchedd that api..
     }
  return (
   <div className='todo-box'>
      {getTodo && getTodo.map((todo)=>(
            <li id={todo.id} style={{listStyle: "none",margin:"10px",padding:"5px",backgroundColor:"orange", border:"2px solid black"}}>
                <h2>{todo.title}</h2>
            </li>
      ))}
      <button onClick={handleApi}>Get data...</button>
   </div>
  )
}

export default ShowTodo