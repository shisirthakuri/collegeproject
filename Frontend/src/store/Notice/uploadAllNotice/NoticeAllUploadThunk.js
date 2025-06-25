import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUploadImage } from "./NoticeAllUploadSlice";
import axios from "axios";

export const uploadpdf = createAsyncThunk(
  "upload/uploadpdf", // ✅ more descriptive action name
  async ({ pdf, topic }, { dispatch, rejectWithValue }) => {
    console.log(pdf,"from thunk")
    try {
      const formData = new FormData();
      formData.append("pdf", pdf);
      formData.append("topic", topic);

      const response = await axios.post(
        "http://localhost:3000/NarayanMavi/uploadAll",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true, // ✅ FIXED: Move this inside the same config object
        }
      );

      if (response.status === 200) {
        dispatch(setUploadImage(response.data.pdf));
        return { message: response.data.message };
      }

      return rejectWithValue("Upload failed unexpectedly");
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "PDF upload failed"
      );
    }
  }
);
