import { createSlice } from "@reduxjs/toolkit";
import { getimage } from "./ImageFetchThunk";

const fetchimages = createSlice({
    name:'fetchimage',
    initialState:{
        images:[],
        error:null,
        status:null
    },
    reducers:{
        setImages:(state,action)=>{
            state.images =action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getimage.pending,(state)=>{
            state.status ='pending',
            state.images=[]
        }).addCase(getimage.fulfilled,(state)=>{
            state.status ='succeded'
        }).addCase(getimage.rejected,(state)=>{
            state.status ='failed'
        })
    }
})

export const {setImages}=fetchimages.actions
export  const fetchImagesReducer = fetchimages.reducer