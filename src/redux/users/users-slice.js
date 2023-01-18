import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "./users-operations";

const initialState = {
  users: [],
  isLoading: false,
  isError: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    //get users
    [getAllUsers.pending]: (state) => {
      state.users = [];
      state.isLoading = true;
      state.isError = null;
    },

    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.users = payload.data;
      state.isLoading = false;
    },

    [getAllUsers.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload;
    },
  },
});

export default usersSlice.reducer;
