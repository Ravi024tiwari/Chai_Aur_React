import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    value:0,//this one is the initial value 
}

const ValueSlice =createSlice({
    name:'updateCounter',
    initialState,//here we define that one of the initial state
    reducers:{
        increasecount :(state,action)=>{
            state.value =state.value+1;//here we increase that value
        },
        deceaseCount:(state,action)=>{
            state.value =state.value-1;//here we decrease that counter value
        }
    }
})

export const {increasecount,deceaseCount} =ValueSlice.actions;//here we fetch the same value where we need it

//now export the wholefucnt
export default ValueSlice.reducer//export that where we need it