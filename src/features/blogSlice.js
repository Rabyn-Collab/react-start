import { createSlice } from "@reduxjs/toolkit";
import { getBlogs, setToLocal } from "./local";




const blogSlice = createSlice({
  name: 'blogSlice',
  initialState: getBlogs(),
  reducers: {

    addBlogs: (state, action) => {
      state = [...state, action.payload];
      setToLocal(state);
    }


  }

});

export const { addBlogs } = blogSlice.actions;
export default blogSlice.reducer;