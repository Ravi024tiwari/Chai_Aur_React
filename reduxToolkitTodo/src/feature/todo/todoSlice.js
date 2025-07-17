import {createSlice,nanoid} from "@reduxjs/toolkit"

//its initial state either object or array //here we initialse with this value
const initialState ={//these are the state where we add new todos...
    todos:[{id:1,text:"Hello World.."}]
}

//now make slice
export const todoSlice =createSlice({
    name:'todo',
    initialState,//its initial state is already declared above during making of slice..
    reducers:{//reduces contain both propery and as wll as function..
        addTodo :(state,action)=>{
            const todo={
                id:nanoid(),//its crete new id...
                text:action.payload//here we mke new todo to addon the array..of todos..
                //here payload is a object which continer more propertiese
            }
            state.todos.push(todo)//its take the state from the total state
        },
        removeTodo:(state,action)=>{
            //firstlty we get that id and filter out that object and remove them..
            state.todos =state.todos.filter((todo)=>todo.id!=action.payload)//target id passed by action payload o
            //to compare them

        }
    }
})

export const {addTodo,removeTodo} =todoSlice.actions //to export the functionality part

export default todoSlice.reducer//because

