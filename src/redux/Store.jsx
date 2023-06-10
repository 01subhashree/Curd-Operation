import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./PostSlicer";
import usersReducer from "./UserSlicer";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});

export default store;
