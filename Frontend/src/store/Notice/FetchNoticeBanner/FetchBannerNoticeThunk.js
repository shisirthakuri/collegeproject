import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchNoticeBannerThunk = createAsyncThunk(
  'noticebannerfetch/FetchNoticeBannerThunk',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/fetchBanner`
      );
      if (response.status === 200) {
        return response.data?.data?.content
      }
    } catch (error) {
      console.error("Thunk error:", error);
      return rejectWithValue(error.response?.data?.message || "Error fetching images");
    }
  }
);
