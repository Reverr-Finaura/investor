import React from "react";
import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

const NewProtectedRoute = ({ Components }) => {
  // const isLogin = localStorage.getItem("login");

  const user = useSelector((state) => state.user.user);

  //   const auth = getAuth();
  // const user = auth.currentUser;

  if (user) {
    return Components;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default NewProtectedRoute;
