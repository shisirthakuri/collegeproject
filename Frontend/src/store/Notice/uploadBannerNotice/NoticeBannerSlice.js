import { createSlice } from "@reduxjs/toolkit";
import { NoticeBannerThunk } from "./NoticeBannerThunk";


const NoticeBanner = createSlice({
    name:'NoticeBanner',
    initialState:{
        status:null,
        error:null,
        message:null
    },
    reducers:{  
        resetMessage: (state) => {
      state.message = '';
    },},
    extraReducers:(builder)=>{
        builder.addCase(NoticeBannerThunk.pending,(state,action)=>{
            state.status="pending",
            state.error=null,
            state.message=null
        }).addCase(NoticeBannerThunk.fulfilled,(state,action)=>{
            state.status="succeeded",
            state.error=null,
            state.message=action.payload
        }).addCase(NoticeBannerThunk.rejected,(state,action)=>{
            state.status="failed",
            state.error=action.payload,
            state.message=null
        })
    }
})

export const {resetMessage}=NoticeBanner.actions
export const NoticeBannerReducer = NoticeBanner.reducer