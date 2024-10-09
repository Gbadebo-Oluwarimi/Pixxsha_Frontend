import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./Features/popupslice";

export const store = configureStore({
  reducer: {
    popup: popupReducer,
  },
});
