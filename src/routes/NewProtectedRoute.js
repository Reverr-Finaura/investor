import React from "react";

import { Navigate } from "react-router-dom";

const NewProtectedRoute = ({ Components }) => {
  const isLogin = localStorage.getItem("login");

  //   const auth = getAuth();
  // const user = auth.currentUser;
  console.log(isLogin);
  if (!isLogin) {
    return <Navigate to="/" replace />;
  }

  return Components;
};

export default NewProtectedRoute;
