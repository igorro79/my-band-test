import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserGallery = createAsyncThunk(
  "gallery/getUserGallery",
  async (id) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}/albums`
      );
      console.log(response);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
);
