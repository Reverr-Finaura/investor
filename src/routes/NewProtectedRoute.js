import React from "react";

import { Navigate } from "react-router-dom";

const NewProtectedRoute = ({ Components }) => {
  const isLogin = localStorage.getItem("login");
  console.log(isLogin);
  if (!isLogin) {
    return <Navigate to="/" replace />;
  }

  return Components;
};

export default NewProtectedRoute;
