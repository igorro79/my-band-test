const getGallery = (state) => state.gallery.gallery;
const getError = (state) => state.gallery.isError;
const getLoading = (state) => state.gallery.isLoading;

export const gallerySelectors = {
  getGallery,
  getError,
  getLoading,
};
