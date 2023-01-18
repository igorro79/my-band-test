const getPosts = (state) => state.posts.posts;
const getError = (state) => state.posts.isError;
const getLoading = (state) => state.posts.isLoading;

export const postsSelectors = {
  getPosts,
  getError,
  getLoading,
};
