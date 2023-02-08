import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { getUserFromDatabase } from "./firebase/firebase";
import { login } from "./redux/user/userSlice";

function App() {
  const dispatch = useDispatch();
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // console.log(user);
      const UserInfo = await getUserFromDatabase(user.uid);
      if (UserInfo) {
        // console.log(UserInfo);
        dispatch(login(UserInfo));
      }
    } else {
      console.log("signout ");
    }
  });
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
