import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const contactThunk = createAsyncThunk(
  'fetchimage/getimage',
  async (formData, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/contact`,
      formData
      );
      if (response.status === 200) {
    return response.data.message
      }
    } catch (error) {
      console.error("Thunk error:", error);
      return rejectWithValue(error.response?.data?.message || "Error fetching images");
    }
  }
);
