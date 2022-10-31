import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  blog: [],
};

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
    setBlog: (state, action) => {
      state.blog = action.payload;
    },
    removeBlog: (state, action) => {
      state.blog = null;
    },
  },
});

export const { setBlog, removeBlog, setBlogs } = blogsSlice.actions;

export default blogsSlice.reducer;
