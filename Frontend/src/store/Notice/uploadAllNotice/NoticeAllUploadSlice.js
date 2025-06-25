
import { createSlice } from "@reduxjs/toolkit";
import { uploadpdf } from "./NoticeAllUploadThunk";


const pdfuploader = createSlice({
    name:'upload',
    initialState:{
        pdf:null,
        error:null,
        message:null,
        status:null
    },
    reducers:{
        setUploadImage:(state,action)=>{
            state.pdf=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(uploadpdf.pending,(state)=>{
            state.status="pending"
            state.error=null,
            state.message=null
        }).addCase(uploadpdf.fulfilled,(state,action)=>{
            state.status="succeeded"
            state.error=null,
            state.message=action.payload.message
        }).addCase(uploadpdf.rejected,(state,action)=>{
            state.status="failed"
            state.error=action.payload,
            state.message=null
        })
    }
})

export const {setUploadImage} = pdfuploader.actions
export const pdfuploaders = pdfuploader.reducer