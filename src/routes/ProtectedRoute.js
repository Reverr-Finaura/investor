import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserFromDatabase } from "../firebase/firebase";

const ProtectedRoute = ({ children }) => {
  const userUid = JSON.parse(localStorage.getItem("uid"));

  // const [isValidate, setIsValidate] = useState(true);
  var auth = true;

  const isValidateUser = async (userUid) => {
    if (userUid !== null) {
      const user = await getUserFromDatabase(userUid);
      const { uid } = user;
      console.log("FalseUId : ", uid, userUid);
      if (uid === userUid) {
        // setIsValidate((isValidate) => !isValidate);
        auth = false;
        // console.log("FalseValidate : ", isValidate);
      } else {
        // setIsValidate(true);
        auth = true;
        console.log("I Am Called 1");
      }
    } else {
      auth = true;
      console.log("I Am Called 2");
    }
  };

  useEffect(() => {
    isValidateUser(userUid);
  }, []);

  if (false) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
