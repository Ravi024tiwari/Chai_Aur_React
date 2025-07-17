import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    todos:[]//here we make a todos array where we store the state values in the todos array
}

const todosSlice =createSlice({
    name:'todo',
    initialState,
    reducers:{
        setTodos: (state, action) => {
        state.todos = action.payload;//jab disptch hoga to setdo bhi hoga
        //dispatch se jo bhi data bheja gya usko yha par payload se set kar diya in state
    },
    }
})

export  const {setTodos}  =todosSlice.actions;

export default todosSlice.reducer;//here we export the redure as a default