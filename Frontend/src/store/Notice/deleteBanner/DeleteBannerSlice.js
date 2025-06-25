import { createSlice } from "@reduxjs/toolkit";
import { deleteNoticeBannerThunk } from "./DeleteBannerThunk";



const deleteNoticeBanner = createSlice({
    name:' deleteNoticeBanner',
    initialState:{
        error:null,
        status:null,
        message:null
    },
    reducers:{
        resetNotice:(state)=>{
            state.message=null
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(deleteNoticeBannerThunk.pending,(state)=>{
            state.status ='pending'
        }).addCase(deleteNoticeBannerThunk.fulfilled,(state,action)=>{
            state.status ='succeded',
            state.message=action.payload
        }).addCase(deleteNoticeBannerThunk.rejected,(state)=>{
            state.status ='failed'
        })
    }
})

export const {resetNotice}=deleteNoticeBanner.actions
export  const  deleteNoticeBannerReducer =  deleteNoticeBanner.reducer