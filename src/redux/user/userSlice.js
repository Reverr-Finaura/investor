import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserFromDatabase } from "../../firebase/firebase";

// export const fetchUserData = createAsyncThunk(
//   "user/fetchUserData",
//   async () => {
//     const user = await getUserFromDatabase("lQqFJTJBiAaaROvSfro0q8eXsB32");
//     return user;
//   }
// );

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },

    logout: (state, action) => {
      state.user = null;
    },
  },
  // extraReducers: {
  //   [fetchUserData.pending]: () => {
  //     console.log("pending");
  //   },
  //   [fetchUserData.fulfilled]: (state, { payload }) => {
  //     state.user = payload;
  //   },
  //   [fetchUserData.rejected]: () => {
  //     console.log("Rejected");
  //   },
  // },
});

export const { login, logout, updateUser } = userSlice.actions;

export default userSlice.reducer;
