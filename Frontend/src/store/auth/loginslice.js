import { createSlice } from "@reduxjs/toolkit"
import {login} from './loginThunk' // Adjust path to your thunks file

const initialState = {
  username: null,
  status: "idle", // idle, loading, succeeded, failed
  error: null,
  message:"",
  accessToken:""
};

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      console.log(action.payload.user.accessToken)
      state.username = action.payload.user.username || null;
      state.status = "succeeded";
      state.error = null;
      state.accessToken =action.payload.user.accessToken
    },
    logout: (state) => {
      state.username = null;
      state.status = "idle";
      state.error = null;
        state.accessToken =null
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message=action.payload.message
        // Note: username and accessToken are set via setCredentials in the thunk
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setCredentials, logout, setStatus, setError} = loginSlice.actions;
export const loginReducer = loginSlice.reducer;