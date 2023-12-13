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
    },

    updateBlog: (state, action) => {
      state.blogs = state.blogs.map((blog) => {
        return blog.id === action.payload.id ? action.payload : blog
      });
      setToLocal(state.blogs);
    },

    removeBlog: (state, action) => {
      state.blogs.splice(action.payload, 1);
      setToLocal(state.blogs);
    }


  }

});

export const { addBlogs, updateBlog, removeBlog } = blogSlice.actions;
export default blogSlice.reducer;