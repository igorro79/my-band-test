import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import usersReducer from "./users/users-slice";
import postsReducer from "./posts/posts-slice";
import galleryReducer from "./gallery/gallery-slice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    gallery: galleryReducer,
  },
  middleware: customizedMiddleware,
});
