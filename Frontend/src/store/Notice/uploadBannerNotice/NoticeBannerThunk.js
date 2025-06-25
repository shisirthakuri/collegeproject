import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/api";

export const NoticeBannerThunk = createAsyncThunk("NoticeBanner/NoticeBannerThunk",async(content,{dispatch,rejectWithValue})=>{
    try {
        const response = await api.post('/uploadBanner',{content})
        return response.data.message
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

