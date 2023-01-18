import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk("users/getAll", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response;
  } catch (error) {
    console.log(error);
  }
});
