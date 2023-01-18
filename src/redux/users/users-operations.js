import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response);
    return response;
  } catch (error) {
    throw new Error(error);
  }
});
export const getUserPosts = createAsyncThunk(
  "users/getUserPosts",
  async ({ id }) => {
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
