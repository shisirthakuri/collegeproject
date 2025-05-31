import { createSlice } from "@reduxjs/toolkit"
import {loginAdmin, logoutAdmin} from './loginThunk' // Adjust path to your thunks file

const initialState = {
  username: null,
  status: "idle", // idle, loading, succeeded, failed
  error: null,
  message:"",
  accessToken:null
};

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      console.log(action.payload.user.accessToken,"lDO")
      state.username = action.payload.user.username || null;
      state.status = "succeeded";
      state.error = null;
      state.accessToken =action.payload.user.accessToken || "hello"
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
        setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.message=""
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message=action.payload.message
        // Note: username and accessToken are set via setCredentials in the thunk
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
         .addCase(logoutAdmin.pending, (state,action) => {
        state.message=""
      })
      .addCase(logoutAdmin.fulfilled, (state,action) => {
        state.username = null;
        state.accessToken = null;
        state.status = 'succeeded';
        console.log(action.payload.message,"logout hai")
        state.message=action.payload.message
      })
        .addCase(logoutAdmin.rejected, (state,action) => {
        state.message=action.payload
      })
  },
});

export const { setCredentials, setStatus, setError,setMessage} = loginSlice.actions;
export const loginReducer = loginSlice.reducer;