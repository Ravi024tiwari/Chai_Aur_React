import {configureStore} from "@reduxjs/toolkit";
import todoreducer from "../slice/apiSlice"

const store =configureStore({
    reducer:{
        todo:todoreducer,//here we setup the reducere
    },
})

export default store;//here we got that store