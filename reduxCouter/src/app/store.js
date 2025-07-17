import { configureStore } from "@reduxjs/toolkit";

import counterReducers from  "../feature/updateCounter"

const store =configureStore({
    reducer :counterReducers
})// here its takes the the reducers that we create to update the count means the funct

export default store