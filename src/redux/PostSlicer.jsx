import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    deletePost: (state, action) => {
      const postId = action.payload;
      return state.filter((post) => post.id !== postId);
    },
    updatePost: (state, action) => {
      const updatedPost = action.payload;
      const index = state.findIndex((post) => post.id === updatedPost.id);
      if (index !== -1) {
        state[index] = updatedPost;
      }
    },
  },
});

export const { addPost, deletePost, updatePost } = postsSlice.actions;

export default postsSlice.reducer;
