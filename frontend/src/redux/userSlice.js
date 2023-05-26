import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email : "",
    firstName : "",
    image : "",
    lastName : "",
    _id : ""
}

export const userSlice = createSlice({
    name : "user",
    initialState,
   reducers : {
    loginRedux:(state,action)=>{
        console.log(action.payload.data)
       // state.user = action.payload.data
       state._id = action.payload.data._id
       state.firstName = action.payload.data.firstName
       state.lastName = action.payload.data.lastName
       state.image= action.payload.data.image
       state.email= action.payload.data.email
    },

    logoutRedux : (state,action) => {
        state._id = "";
        state.firstName = "";
        state.lastName = "";
        state.image= "";
        state.email= "";
    }
   }
})

export  const  {loginRedux ,logoutRedux } = userSlice.actions

export default userSlice.reducer