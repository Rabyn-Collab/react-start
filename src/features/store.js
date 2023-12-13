import { configureStore } from "@reduxjs/toolkit";
import blogReducer from '../features/blogSlice'





export const store = configureStore({
  reducer: {
    blog: blogReducer
  }
});