import { signInWithGoogle } from "../../../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./SignUp.css";
import Navbar from "../../../components/navbar/Navbar";
import topImage from "../../../assets/img/top-image.png";
import { generateOtp } from "../../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { createUser, setOtp } from "../../../redux/auth/newUserSlice";
import { sendOtpToMail } from "../../../emailJs/emailjs";
import OtpVerification from "../otpverification/OtpVerification";
import Footer from "../../../components/footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";

const SignUp = () => {
  // window.scrollTo(0, 0);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [linkedInUrl, setLinkedInUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referredBy, setReferredBy] = useState("");
  const [stageOfInvestment, setStageOfInvestment] = useState("");
  const [amount, setAmount] = useState("");
  const [experienceOfInvesting, setExperienceOfInvesting] = useState("");
  const [sectorsOfInvesting, setSectorsOfInvesting] = useState([]);

  const dispatch = useDispatch();
  const [personalDetailsTabActive, setPersonalDetailsTabActive] =
    useState(true);
  const [investmentDetailsTabActive, setInvestmentDetailsTabActive] =
    useState(false);
  const newUser = useSelector((state) => state.newUser);
  const navigate = useNavigate();

  const onCreateAccountClickHandler = async () => {
    if (
      fullName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      linkedInUrl === "" ||
      !phoneNumber
    ) {
      toast.error("Kindly Fill Mandatory Fields");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password Must Match");
      return;
    }
    const otp = generateOtp();
    const user = {
      fullName,
      email,
      password,
      referredBy,
      gender,
      country,
      linkedInUrl,
      phoneNumber,
      stageOfInvestment,
      amount,
      experienceOfInvesting,
      sectorsOfInvesting,
      calls: [],
      interstedDeals: [],
      whenToInvest: null,
      userType: "Investor",
      instagram: "",
      userDescription: "",
      twitter: "",
      userImg: null,
    };
    const userName = fullName;


    dispatch(createUser(user));
    dispatch(setOtp(otp));
    sendOtpToMail(userName, email, otp);


    
    navigate("/otp-verify");
  };

  return (
    <>
      <div className="signup__main">
        <Navbar />
        <div className="signup__content-wrap">
          <div className="signup__left">
            <div className="signup__left-heading">
              If you love good ideas then we at{" "}
              <span style={{ color: "white" }}>REVERR VENTURE PARTNERS</span>{" "}
              can help you invest in the best one.
            </div>
            <div className="signup__left-paragraph">
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy. Just click “Edit Text” or double click me to add your own
              content.
            </div>
          </div>
          <div className="signup__right">
            <div className="signup-card">
              <div className="details-tab">
                <button
                  style={{ cursor: "default" }}
                  className={
                    personalDetailsTabActive
                      ? "personal-details__tab-button personal-details__tab-button-active"
                      : "personal-details__tab-button"
                  }
                  onClick={() => {
                    setInvestmentDetailsTabActive(false);
                    setPersonalDetailsTabActive(true);
                  }}
                >
                  Sign Up Form
                </button>
              </div>

              {personalDetailsTabActive && (
                <div className="personal-details">
                  <label>
                    Name <span className="important">*</span>
                  </label>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="input-box"
                    placeholder="Enter Your Name"
                  />
                  <label>
                    Email ID <span className="important">*</span>
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-box"
                    placeholder="example@reverr.com"
                  />

                  <label>
                    Phone Number <span className="important">*</span>
                  </label>
                  <input
                    type="number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(Number(e.target.value))}
                    className="input-box"
                    placeholder="Enter Your Phone No."
                  />
                  <label>
                    Password <span className="important">*</span>
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-box"
                    type="password"
                    placeholder="Enter Your Password"
                  />

                  <label>
                    Confirm Password <span className="important">*</span>
                  </label>
                  <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="input-box"
                    type="password"
                    placeholder="Confirm Your Password"
                  />
                  <label>
                    LinkedIn URL <span className="important">*</span>
                  </label>
                  <input
                    value={linkedInUrl}
                    onChange={(e) => setLinkedInUrl(e.target.value)}
                    className="input-box"
                    placeholder="Enter your LinkedIn URL"
                  />
                  <label>
                    Referred By (Partner Name){" "}
                    <span className="important"></span>
                  </label>
                  <input
                    value={referredBy}
                    onChange={(e) => setReferredBy(e.target.value)}
                    className="input-box"
                    placeholder="Enter your Referral Name"
                  />

                  <button
                    onClick={onCreateAccountClickHandler}
                    className="signup-button"
                    style={{ marginBottom: "2rem" }}
                  >
                    Sign Up
                  </button>

                  <div
                    style={{
                      textAlign: "center",
                      color: "white",
                      marginBottom: "2rem",
                    }}
                  >
                    {" "}
                    Already have an account?{" "}
                    <Link to="/" className="bottom-sign-in-link">
                      Sign In
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ToastContainer />
    </>
  );
};

export default SignUp;
