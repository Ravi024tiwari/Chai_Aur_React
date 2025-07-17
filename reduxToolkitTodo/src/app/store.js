import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../feature/todo/todoSlice"

export const store =configureStore({//here we get that reducer from todoSlice {logically.. part}
    reducer:todoReducer
})//configuring the Store