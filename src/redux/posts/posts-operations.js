import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserPosts = createAsyncThunk(
  "posts/getUserPosts",
  async (id) => {
    // console.log(id);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}/posts`
      );
      console.log(response);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
);
