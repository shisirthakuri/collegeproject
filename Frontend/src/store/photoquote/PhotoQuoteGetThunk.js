import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const photoquoteThunk = createAsyncThunk("photoquote/photoquoteThunk",async(_,{dispatch,rejectWithValue})=>{
try {
       const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/getphoto`)
   return response.data.data
} catch (error) {
    return rejectWithValue(error.response.data.message|| "error occurred.")
}
})