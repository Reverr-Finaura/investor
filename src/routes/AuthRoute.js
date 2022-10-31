// import { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { getUserFromDatabase } from "../firebase/firebase";

// const AuthRoute = ({ children }) => {
//   const userUid = JSON.parse(localStorage.getItem("uid"));
//   const [isValidate, setIsValidate] = useState(false);

//   const isValidateUser = async (userUid) => {
//     const user = await getUserFromDatabase(userUid);
//     if (user) {
//       const { uid } = user;
//       if (uid === userUid) {
//         setIsValidate(true);
//       } else {
//         setIsValidate(false);
//       }
//     } else {
//       setIsValidate(false);
//     }
//   };

//   useEffect(() => {
//     isValidateUser(userUid);
//   }, []);

//   if (userUid) {
//     return <Navigate to="/dashboard" replace />;
//   }
//   return children;
// };

// export default AuthRoute;