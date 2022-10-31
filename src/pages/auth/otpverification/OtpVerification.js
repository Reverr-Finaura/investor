import reverrLogo from "../../../assets/vectors/Reverr Black 2.png";
import "./OtpVerification.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { delOtp, delUser } from "../../../redux/auth/newUserSlice";

import { login } from "../../../redux/user/userSlice";
import {
  addUserInDatabase,
  createUserWithEmailPassword,
} from "../../../firebase/firebase";
import { sendAccountHasBeenCreatedMail } from "../../../emailJs/emailjs";
const OtpVerification = () => {
  const navigate = useNavigate();
  const [otpInput, setOtpInput] = useState("");
  const onOtpEnterHandler = (value) => {
    setOtpInput(value);
  };

  const dispatch = useDispatch();
  const user = useSelector((state) => state.newUser.newUser);
  const otp = useSelector((state) => state.newUser.otp);
  const onVerifyOtpClickHandler = async () => {
    if (user) {
      const { firstName, lastName, email, password } = user;
      const name = `${firstName} ${lastName}`;
      if (otp === otpInput) {
        await createUserWithEmailPassword(email, password).then((data) => {
          const { uid } = data.user;
          console.log("Otp-ID : ", uid);
          addUserInDatabase(uid, {
            ...user,
            uid,
          });
        });

        await sendAccountHasBeenCreatedMail(name, email);
        dispatch(delUser());
        dispatch(delOtp());
        toast.success(
          "Your account created successfully ! please login to continue !",
          setTimeout(() => {
            navigate("/");
            dispatch(delUser());
          }, 3000)
        );
      } else {
        toast.error("Please enter a valid OTP!", { autoClose: 1500 });
      }
    } else {
      toast.error("No OTP sent yet!", { autoClose: 1500 });
    }
  };

  window.scrollTo(0, 0);

  return (
    <>
      <div className="otp-verify__navbar">
        <img src={reverrLogo} alt="reverr-logo" className="otp-verify__logo" />
        <div className="otp-verify__title">REVERR VENTURE PARTNERS</div>
      </div>
      <div className="otp-verify__card-wrap">
        {user && (
          <h3 style={{ marginTop: "2rem", width: "25%", textAlign: "center" }}>
            An otp has been sent to your mail please check and verify!
          </h3>
        )}
        <div className="otp-verify__card">
          <div className="otp-verify__card-heading">OTP Verification</div>
          <input
            onChange={(e) => onOtpEnterHandler(e.target.value)}
            placeholder="Enter Your OTP"
            className="otp-verify__otp-input"
          />

          <button
            onClick={onVerifyOtpClickHandler}
            className="otp-verify__verify-otp"
          >
            Verify Email
          </button>
          <div className="otp-verify__login" onClick={() => navigate("/")}>
            Log in
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop={false}
        hideProgressBar={true}
        closeOnClick
        rtl={false}
        draggable
      />
    </>
  );
};

export default OtpVerification;
