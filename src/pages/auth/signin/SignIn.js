import {
  addUserToMetadata,
  getAdminsFromDatabase,
  getUserFromDatabase,
  signIn,
  signInWithGoogle,
} from "../../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./SignIn.css";
import logo from "../../../assets/vectors/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import google from "../../../assets/img/login_icons/google.png";
import linkedin from "../../../assets/img/login_icons/linkedin.png";
import twitter from "../../../assets/img/login_icons/twitter.png";
import Footer from "../../../components/footer/Footer";
import ellipse3 from "../../../assets/img/ellipse3.png";
import ellipse4 from "../../../assets/img/ellipse4.png";
import ellipse5 from "../../../assets/img/ellipse5.png";
import ellipse6 from "../../../assets/img/ellipse6.png";
import Navbar from "../../../components/navbar/Navbar";
import { ArrowRepeat } from "react-bootstrap-icons";
import { ToastContainer, toast } from "react-toastify";
import { fetchUserData, login } from "../../../redux/user/userSlice";

const SignIn = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const onPasswordEnterHandler = (value) => {
    setpassword(value);
  };

  const onEmailEnterHandler = (value) => {
    setemail(value);
  };

  const onSignInClickHandler = async () => {
    if (email && password) {
      setIsLoading(true);
      signIn(email, password)
        .then(async (data) => {
          const { uid } = data.user;

          console.log(data.user);

          const user = await getUserFromDatabase(uid);
          console.log(user);
          if (!user?.userType) {
            toast("Please Enter Investor credentials");
            setIsLoading(false);
          }
          // dispatch(fetchUserData());
          // dispatch(login(user));
          if (user?.userType !== "Investor") {
            toast("Please Enter Investor credentials");
            console.log("63");
          } else {
            localStorage.setItem("login", true);
            navigate("/dashboard");

            dispatch(login(user));

            setIsLoading(false);
            window.scrollTo(0, 0);
          }
        })
        .catch((err) => {
          setIsLoading(false);
          toast.error(err.message, {
            autoClose: 2000,
          });
        });
    } else {
      setIsLoading(false);
      toast.error("Please enter a valid email or password !", {
        autoClose: 2000,
      });
    }
  };

  const onSignInWithGoogleClickHandler = async () => {
    signInWithGoogle().then((data) => console.log(data));
  };

  const onKeyDownHandler = (event) => {
    if (event.keyCode === 13) {
      onSignInClickHandler();
    }
  };

  return (
    <>
      <Navbar />
      <div className="main" onKeyDown={onKeyDownHandler} tabIndex={0}>
        <div className="login-left">
          <div className="welcome-heading">Welcome !</div>
          <div className="login-to-account">Log in to your account</div>

          <div className="login-card">
            <div className="label">Your Email</div>
            <input
              onChange={(e) => onEmailEnterHandler(e.target.value)}
              placeholder="Enter Your Email"
              className="email__input-box"
            />
            <div className="label">You Password</div>
            <div>
              <div className="password-wrap">
                <input
                  onChange={(e) => onPasswordEnterHandler(e.target.value)}
                  placeholder="Enter Your Password"
                  className="password__input-box"
                  type={showPassword ? "text" : "password"}
                />
                <button
                  className="show-password"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? <BiShow size={20} /> : <BiHide size={20} />}
                </button>
              </div>
            </div>
            <span
              className="forgot-password"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password ?
            </span>
            <div
              style={{ textAlign: "center", color: "white", marginTop: "2rem" }}
            >
              Or Log In with
            </div>
            <div className="social-login-icons">
              <img
                src={google}
                style={{ margin: "auto" }}
                alt="google"
                onClick={onSignInWithGoogleClickHandler}
                width="40px"
                height="34px"
                className="social-login-icons__image"
              />
              {/* <img
                src={linkedin}
                alt="linkedin"
                width="50px"
                className="social-login-icons__image"
              />
              <img
                src={twitter}
                alt="twitter"
                width="50px"
                className="social-login-icons__image"
              /> */}
            </div>
            <button className="login-button" onClick={onSignInClickHandler}>
              {isLoading ? (
                <h2 style={{ margin: 0, padding: 0 }}>
                  <ArrowRepeat className="loading-state" />
                </h2>
              ) : (
                "Log in"
              )}
            </button>
          </div>
        </div>
        <div className="login-right">
          <img src={ellipse3} alt="handshake" className="ellipse3" />
          <img src={ellipse4} alt="hand" className="ellipse4" />
          <br />
          <img src={ellipse6} alt="man2" className="ellipse6" />
          <img src={ellipse5} alt="man" className="ellipse5" />
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

export default SignIn;
