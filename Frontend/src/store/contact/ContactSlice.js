import  { createSlice } from "@reduxjs/toolkit";
import { contactThunk } from "./ContactThunk";
 const contactUs = createSlice({
    name:"contact",
    initialState:{
        status:null,
        error:null,
        message:null
    },
    reducers:{
        setRefresh:(state)=>{
            state.error =null,
            state.message=null
        }
    },
    extraReducers:(builder)=>{
           builder.addCase(contactThunk.pending,(state)=>{
               state.status ='pending',
               state.error = null
           }).addCase(contactThunk.fulfilled,(state,action)=>{
               state.status ='succeded'
               state.message = action.payload
           }).addCase(contactThunk.rejected,(state)=>{
               state.status ='failed'
           })
       }
})
export const{setRefresh} = contactUs.actions

export const contactReducer = contactUs.reducer