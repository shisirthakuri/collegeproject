import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setCredentials } from "./loginslice";

export const login = createAsyncThunk(
  "auth/loginUser", // Use a consistent slice prefix like "auth"
  async (formData, { dispatch, rejectWithValue }) => {
    console.log(formData)
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/login`,
        {formData},
      );
console.log(response)
      // Store user info in Redux store
      dispatch(setCredentials(response.data));
      return { message:response.message }; // This becomes action.payload in fulfilled case
    } catch (error) {
      const errMessage =
        error.response?.data?.error?.message ||
        error.response?.data?.message ||
        "Login failed. Please try again.";
      return rejectWithValue(errMessage); // This becomes action.payload in rejected case
    }
  }
);
