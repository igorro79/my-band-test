import { createSlice } from "@reduxjs/toolkit";
import { getUserGallery } from "./gallery-operations";

const initialState = {
  gallery: [],
  isLoading: false,
  isError: null,
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  extraReducers: {
    //get gallery
    [getUserGallery.pending]: (state) => {
      state.gallery = [];
      state.isLoading = true;
      state.isError = null;
    },

    [getUserGallery.fulfilled]: (state, { payload }) => {
      state.gallery = payload.data;
      state.isLoading = false;
    },

    [getUserGallery.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload;
    },
  },
});

export default gallerySlice.reducer;
