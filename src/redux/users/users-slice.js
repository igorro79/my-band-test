import { createSlice } from "@reduxjs/toolkit";
import getAllUsers from "./heroes-operations";

const initialState = {
  users: [],
  isLoading: false,
  isError: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.isLoading = true;
      state.isError = null;
    },

    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.users = payload.users;
      state.isLoading = false;
    },

    [getAllUsers.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload;
    },
  },
});

export default usersSlice.reducer;
