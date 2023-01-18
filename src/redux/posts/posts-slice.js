import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, getUserPosts } from "./posts-operations";

const initialState = {
  posts: [],
  isLoading: false,
  isError: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    // get user posts
    [getUserPosts.pending]: (state) => {
      state.posts = [];
      state.isLoading = true;
      state.isError = null;
    },

    [getUserPosts.fulfilled]: (state, { payload }) => {
      state.posts = payload.data;
      state.isLoading = false;
    },

    [getUserPosts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload;
    },
  },
});

export default postsSlice.reducer;
