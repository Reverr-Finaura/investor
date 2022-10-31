import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newUser: null,
  otp: null,
};

export const newUserSlice = createSlice({
  name: "newUser",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.newUser = action.payload;
    },
    setOtp: (state, action) => {
      state.otp = action.payload;
    },
    updateUser: (state, action) => {
      state.newUser = { ...state.newUser, ...action.payload };
    },
    delUser: (state, action) => {
      state.newUser = null;
    },
    delOtp: (state, action) => {
      state.otp = null;
    },
  },
});

export const { createUser, updateUser, delUser, setOtp,delOtp } = newUserSlice.actions;

export default newUserSlice.reducer;
