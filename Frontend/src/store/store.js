import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./auth/loginslice";
import { uploader } from "./upload/uploadSlice";




const store = configureStore({
  reducer: {
    login:loginReducer,
    upload:uploader
  },
});

export default store
