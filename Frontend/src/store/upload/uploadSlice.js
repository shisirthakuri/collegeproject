import { createSlice } from "@reduxjs/toolkit";
 import { uploadimage } from "./uploadThunk";

const imageuploader = createSlice({
    name:'upload',
    initialState:{
        image:[],
        error:null,
        message:null,
        status:null
    },
    reducers:{
        setUploadImage:(state,action)=>{
            state.image=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(uploadimage.pending,(state)=>{
            state.status="pending"
            state.error=null,
            state.message=null
        }).addCase(uploadimage.fulfilled,(state,action)=>{
            state.status="succeeded"
            state.error=null,
            state.message=action.payload.message
        }).addCase(uploadimage.rejected,(state,action)=>{
            state.status="failed"
            state.error=action.payload,
            state.message=null
        })
    }
})

export const {setUploadImage} = imageuploader.actions
export const uploader = imageuploader.reducer