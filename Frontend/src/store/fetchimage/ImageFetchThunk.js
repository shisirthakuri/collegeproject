import { createAsyncThunk } from "@reduxjs/toolkit";
import { setImages } from "./ImageFetchslice";
import axios from "axios";

export const getimage = createAsyncThunk(
  'fetchimage/getimage',
  async ({ category }, { dispatch, rejectWithValue }) => {
    try {
      console.log(category, "thunk"); // ✅ fixed typo
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/fetchimage`,
        {
          params: { category }, // ✅ correct way to send query param
        }
      );
      if (response.status === 200) {
        dispatch(setImages(response.data.images));
      }
    } catch (error) {
      console.error("Thunk error:", error);
      return rejectWithValue(error.response?.data?.message || "Error fetching images");
    }
  }
);
