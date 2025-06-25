import { createSlice } from "@reduxjs/toolkit";
import { FetchNoticeBannerThunk } from "./FetchBannerNoticeThunk";


const fetchNoticeBanner = createSlice({
    name:' fetchNoticeBanner',
    initialState:{
        notice:"",
        error:null,
        status:null
    },
    reducers:{
  
    },
    extraReducers:(builder)=>{
        builder.addCase(FetchNoticeBannerThunk.pending,(state)=>{
            state.status ='pending',
            state.images=""
        }).addCase(FetchNoticeBannerThunk.fulfilled,(state,action)=>{
            state.status ='succeded'
            state.notice=action.payload
        }).addCase(FetchNoticeBannerThunk.rejected,(state)=>{
            state.status ='failed'
        })
    }
})

export  const  fetchNoticeBannerReducer =  fetchNoticeBanner.reducer