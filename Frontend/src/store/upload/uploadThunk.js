import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUploadImage } from "./uploadSlice";
import axios from "axios";

export const uploadimage = createAsyncThunk(
  "upload/uploadimage",
  async (images, { dispatch, rejectWithValue }) => {
    try {
      // Create a FormData object and append all images
      const formData = new FormData();
      images.forEach((image) => formData.append("images", image)); // Must match multer field name: images

      // Make the API request
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/imageupload`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Handle success
      if (response.status === 200) {
        dispatch(setUploadImage(response.data.images)); // Save uploaded image URLs or metadata to Redux
        return { message: response.data.message };       // Return success message
      }

      return rejectWithValue("Upload failed unexpectedly");
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Image upload failed"
      );
    }
  }
);
