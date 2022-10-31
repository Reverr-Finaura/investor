import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDealsFromDatabase } from "../../firebase/firebase";

// export const fetchUserData = createAsyncThunk("deals/fetchDeals", async () => {
//   const user = await fetchDealsFromDatabase();
//   return user;
// });

const initialState = {
  deals: [],
  deal: [],
};

export const dealSlice = createSlice({
  name: "deal",
  initialState,
  reducers: {
    setDeals: (state, action) => {
      state.deals = action.payload;
    },
    setDeal: (state, action) => {
      state.deal = action.payload;
    },
    removeDeal: (state, action) => {
      state.deal = null;
    },
  },

  // extraReducers: {
  //   [fetchUserData.pending]: () => {
  //     console.log("pending");
  //   },
  //   [fetchUserData.fulfilled]: (state, { payload }) => {
  //     state.deals = payload;
  //     console.log("Fullfilled");
  //   },
  //   [fetchUserData.rejected]: () => {
  //     console.log("Rejected");
  //   },
  // },
});

export const { setDeal, removeDeal, setDeals } = dealSlice.actions;

export default dealSlice.reducer;
