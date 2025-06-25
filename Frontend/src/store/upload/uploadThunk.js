import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUploadImage } from "./uploadSlice";
import api from "../../api/api";

export const uploadimage = createAsyncThunk(
  "upload/uploadimage",
  async ({ images, ImageCategory }, { dispatch, rejectWithValue }) => {
    try {
      const formData = new FormData();
      images.forEach((image) => formData.append("images", image)); // Must match multer field name
      formData.append("ImageCategory", ImageCategory); // Add category to the form

      const response = await api.post("/imageupload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        dispatch(setUploadImage(response.data.images));
        return { message: response.data.message };
      }

      return rejectWithValue("Upload failed unexpectedly");
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Image upload failed"
      );
    }
  }
);

