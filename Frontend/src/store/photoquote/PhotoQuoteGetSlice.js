import { photoquoteThunk } from "./PhotoQuoteGetThunk";

import { createSlice } from "@reduxjs/toolkit";

const getphotoAndQuote = createSlice({
    name:"getphotoAndQuote",
    initialState:{
        data:[],
        status:null,
        error:null
    },
    reducers:{

    },
    extraReducers:(builder)=>{
builder.addCase(photoquoteThunk.pending,(state,action)=>{
            state.status="pending",
            state.error=null
        }).addCase(photoquoteThunk.fulfilled,(state,action)=>{
            state.status="succeeded",
            state.error=null,
            state.data = action.payload
        }).addCase(photoquoteThunk.rejected,(state,action)=>{
            state.status="failed",
            state.error=action.payload
        })
    }
})

export const getphotoAndQuoteReducer = getphotoAndQuote.reducer