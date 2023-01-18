const getUsers = (state) => state.users.users;
const getError = (state) => state.users.isError;
const getLoading = (state) => state.users.isLoading;

export const usersSelectors = {
  getUsers,
  getError,
  getLoading,
};
