import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserPosts = createAsyncThunk(
  "posts/getUserPosts",
  async (id) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}/posts`
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
);
