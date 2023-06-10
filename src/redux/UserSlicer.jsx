import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      const userId = action.payload;
      return state.filter((user) => user.id !== userId);
    },
    updateUser: (state, action) => {
      const { id, name } = action.payload;
      console.log(action.payload);
      return state.map((user) => {
        if (user.id === id) {
          return { ...user, name };
        }
        return user;
      });
    },
  },
});

export const { addUser, deleteUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
