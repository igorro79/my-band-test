import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserPosts = createAsyncThunk(
  "posts/getUserPosts",
  async (id, thunkAPI) => {
    const { users } = await thunkAPI.getState();
    console.log(users.users);
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
