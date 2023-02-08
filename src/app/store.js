import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/user/userSlice";
import newUserReducer from "../redux/auth/newUserSlice";
import dealReducer from "../redux/deal/dealSlice";
import blogsReducer from "../redux/blogs/blogsSlice";
import investorDealReducer from "../redux/deal/createDealSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    newUser: newUserReducer,
    deal: dealReducer,
    blogs: blogsReducer,
    investorDeals: investorDealReducer,
  },
});
