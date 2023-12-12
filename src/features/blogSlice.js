import { createSlice } from "@reduxjs/toolkit";
import { getBlogs, setToLocal } from "./local";




const blogSlice = createSlice({
  name: 'blogSlice',
  initialState: {
    blogs: getBlogs()
  },
  reducers: {

    addBlogs: (state, action) => {
      state.blogs = [...state.blogs, action.payload];
      setToLocal(state.blogs);
    }


  }

});

export const { addBlogs } = blogSlice.actions;
export default blogSlice.reducer;