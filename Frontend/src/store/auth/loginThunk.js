import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setCredentials } from "./loginslice";

export const loginAdmin = createAsyncThunk(
  "auth/loginUser", // Use a consistent slice prefix like "auth"
  async (formData, { dispatch, rejectWithValue }) => {
    console.log(formData)
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/login`,
        {formData},{
          withCredentials:true
        },
      );
console.log(response)
      // Store user info in Redux store
      dispatch(setCredentials(response.data));
      localStorage.setItem("accesstoken",response.data.user.accessToken)
      return { message:response.data.message }; // This becomes action.payload in fulfilled case
    } catch (error) {
      const errMessage =
        error.response?.data?.error?.message ||
        error.response?.data?.message ||
        "Login failed. Please try again.";
      return rejectWithValue(errMessage); // This becomes action.payload in rejected case
    }
  }
);

export const logoutAdmin = createAsyncThunk('auth/logout',async(_,{dispatch,rejectWithValue})=>{
try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/logout`, {}, {
        withCredentials: true, // send the cookie to the server
      });
      // Optional: clear localStorage if token stored there
      localStorage.removeItem('accesstoken');
      console.log(response)
      return {message:response.data.message};
} catch (error) {
  const errMessage =
        error.response?.data?.error?.message ||
        error.response?.data?.message ||
        "Login failed. Please try again.";
      return rejectWithValue(errMessage);
}
})
