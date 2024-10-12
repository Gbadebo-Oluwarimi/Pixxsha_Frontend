import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [], // Store images with metadata
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    uploadImage: (state, action) => {
      // Add a new image with its metadata
      state.images.push(action.payload); // payload should contain the image and its metadata (e.g., { id, url, metadata })
    },
    deleteImage: (state, action) => {
      // Delete image by its id
      state.images = state.images.filter(
        (image) => image.id !== action.payload
      );
    },
    deleteImagesByFolderId: (state, action) => {
      // Delete images that belong to a specific folderId
      const folderId = action.payload;
      state.images = state.images.filter(
        (image) => image.folderId === folderId
      );
    },
    editImageMetadata: (state, action) => {
      // Find the image by its id and update its metadata
      const { id, metadata } = action.payload;
      const image = state.images.find((img) => img.id === id);
      if (image) {
        image.metadata = { ...image.metadata, ...metadata }; // Update the metadata with new values
      }
    },
    moveImageToFolder: (state, action) => {
      const { imageId, folderId } = action.payload;
      console.log(imageId, folderId);
      const image = state.images.find((img) => img.id === imageId); // Find the image by its id
      if (image) {
        image.folderId = folderId; // Update the folderId of the image
      }
    },
  },
});

// Selector to get image by ID
export const getImageById = (state, id) => {
  return state.image.images.find((image) => image.id === id);
};

export const {
  uploadImage,
  deleteImage,
  deleteImagesByFolderId,
  editImageMetadata,
  moveImageToFolder, // Export the new action
} = imageSlice.actions;

export default imageSlice.reducer;
