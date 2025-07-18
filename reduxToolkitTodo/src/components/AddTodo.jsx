import React, { useState } from "react";
import {useDispatch} from "react-redux"

//import the indivial reducers
import { addTodo } from "../feature/todo/todoSlice";

function AddTodo(){
 const [input,setInput] =useState('')
    const dispatch =useDispatch()//use that dispatch <method 

    const addTodoHandler =(e)=>{
        e.preventDefault();
        dispatch(addTodo(input))//here we send that payload that we confirre where we want to use
        setInput('')//to clean the form after setting the values
    }
   
    return(
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
    )
}

export default AddTodo;