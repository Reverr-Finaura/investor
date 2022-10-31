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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [linkedInUrl, setLinkedInUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [stageOfInvestment, setStageOfInvestment] = useState("");
  const [amount, setAmount] = useState("");
  const [experienceOfInvesting, setExperienceOfInvesting] = useState("");
  const [sectorsOfInvesting, setSectorsOfInvesting] = useState([]);

  const sectors = [
    { value: 1, label: "Agricultural" },
    { value: 2, label: "Apparel & Accessories" },
    { value: 3, label: "Automobile & Ancillaries" },
    { value: 4, label: "Banking" },
    { value: 5, label: "Consumer Durables" },
    { value: 6, label: "Derived Materials" },
    { value: 7, label: "Energy" },
    { value: 8, label: "Financial" },
    { value: 9, label: "FMCG" },
    { value: 10, label: "Food and Beverages" },
    { value: 11, label: "Healthcare" },
    { value: 12, label: "Hospitality and Travel" },
    { value: 13, label: "Industrial Products" },
    { value: 14, label: "Industries" },
    { value: 15, label: "IT Industry" },
    { value: 16, label: "Logistics and Freight" },
    { value: 17, label: "Media & Entertainment" },
    { value: 18, label: "Raw Material" },
    { value: 19, label: "Tele-Communication" },
    { value: 20, label: "Textile Industry" },
    { value: 21, label: "Others" },
  ];

  const dispatch = useDispatch();
  const [personalDetailsTabActive, setPersonalDetailsTabActive] =
    useState(true);
  const [investmentDetailsTabActive, setInvestmentDetailsTabActive] =
    useState(false);
  const newUser = useSelector((state) => state.newUser);
  const navigate = useNavigate();

  const checkPassword = () => {
    if (password === confirmPassword) {
      return true;
    } else {
      return false;
    }
  };

  const onCreateAccountClickHandler = async () => {
    const otp = generateOtp();
    const user = {
      firstName,
      lastName,
      email,
      password,
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
    const userName = firstName + " " + lastName;
    dispatch(createUser(user));
    dispatch(setOtp(otp));
    sendOtpToMail(userName, email, otp);
    navigate("/otp-verify");
  };

  const onSignInWithGoogleClickHandler = async () => {
    signInWithGoogle().then((data) => {
      // dipatch(login({ user }));
    });
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
                  Personal Details
                </button>
                <button
                  className={
                    investmentDetailsTabActive
                      ? "investment-details__tab-button investment-details__tab-button-active"
                      : "investment-details__tab-button"
                  }
                  onClick={() => {
                    setPersonalDetailsTabActive(false);
                    setInvestmentDetailsTabActive(true);
                  }}
                >
                  Investment Details
                </button>
              </div>

              {personalDetailsTabActive && (
                <div className="personal-details">
                  <label>
                    First Name <span className="important">*</span>
                  </label>
                  <input
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    className="input-box"
                    placeholder="John"
                  />
                  <label>
                    Last Name <span className="important">*</span>
                  </label>
                  <input
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    className="input-box"
                    placeholder="Doe"
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
                    Gender <span className="important">*</span>
                  </label>
                  <div className="genders">
                    <span className="gender__wrapper">
                      <input
                        onClick={(e) => setGender(e.target.value)}
                        type="radio"
                        value="Male"
                        name="gender"
                        className="gender-radio-button"
                      />
                      <span className="gender">Male</span>
                    </span>
                    <span className="gender__wrapper">
                      <input
                        onClick={(e) => setGender(e.target.value)}
                        type="radio"
                        value="Female"
                        name="gender"
                        className="gender-radio-button"
                      />
                      <span className="gender">Female</span>
                    </span>
                    <span className="gender__wrapper">
                      <input
                        onClick={(e) => setGender(e.target.value)}
                        type="radio"
                        value="Non Binary"
                        name="gender"
                        className="gender-radio-button"
                      />
                      <span className="gender">Non Binary</span>
                    </span>
                    <span className="gender__wrapper">
                      <input
                        onClick={(e) => setGender(e.target.value)}
                        type="radio"
                        value="Other"
                        name="gender"
                        className="gender-radio-button"
                      />
                      <span className="gender">Other</span>
                    </span>
                  </div>
                  <label>
                    Country <span className="important">*</span>
                  </label>
                  <input
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="input-box"
                    placeholder="Enter your country"
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
                    Phone Number <span className="important">*</span>
                  </label>
                  <input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
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
                  <button
                    onClick={() => {
                      setPersonalDetailsTabActive(false);
                      setInvestmentDetailsTabActive(true);
                      window.scrollTo(0, 0);
                    }}
                    className="next-button"
                  >
                    Next
                  </button>
                </div>
              )}
              {investmentDetailsTabActive && (
                <div className="investment-details">
                  <label>
                    Sectors for investment <span className="important">*</span>
                  </label>
                  <div className="sectors-for-investment">
                    <Select
                      onChange={(e) => {
                        setSectorsOfInvesting(
                          Array.isArray(e) ? e.map((x) => x.label) : []
                        );
                      }}
                      options={sectors}
                      name="sectors"
                      isMulti
                    />
                  </div>
                  <label>
                    Preferred stage for Investment{" "}
                    <span className="important">*</span>
                  </label>
                  <div className="stage-for-funding">
                    <div className="fundings">
                      <input
                        onChange={(e) => setStageOfInvestment(e.target.value)}
                        type="radio"
                        value="Less than 1 Lakh"
                        name="preferred-stage"
                        className="radio-button"
                      />
                      <span className="preferred-stage">Pre-Seed Funding</span>
                    </div>

                    <div className="fundings">
                      <input
                        onChange={(e) => setStageOfInvestment(e.target.value)}
                        type="radio"
                        value="Less than 1 Lakh"
                        name="preferred-stage"
                        className="radio-button"
                      />
                      <span className="preferred-stage ">Seed Funding</span>
                    </div>

                    <div className="fundings">
                      <input
                        onChange={(e) => setStageOfInvestment(e.target.value)}
                        type="radio"
                        value="Less than 1 Lakh"
                        name="preferred-stage"
                        className="radio-button"
                      />
                      <span className="preferred-stage">Pre-Series A</span>
                    </div>

                    <div className="fundings">
                      <input
                        onChange={(e) => setStageOfInvestment(e.target.value)}
                        type="radio"
                        value="Less than 1 Lakh"
                        name="preferred-stage"
                        className="radio-button"
                      />
                      <span className="preferred-stage">Series A funding</span>
                    </div>
                  </div>
                  <label>
                    Amount you want to invest{" "}
                    <span className="important">*</span>
                  </label>
                  <div className="investment-amounts">
                    <div className="investment-container">
                      <input
                        onChange={(e) => setAmount(e.target.value)}
                        type="radio"
                        value="Less than 1 Lakh"
                        name="investment-amount"
                        className="radio-button"
                      />
                      <span className="investment-amount">
                        Less than 1 Lakh
                      </span>
                    </div>
                    <div className="investment-container">
                      <input
                        onChange={(e) => setAmount(e.target.value)}
                        type="radio"
                        value="1 Lakh - 5 Lakh"
                        name="investment-amount"
                        className="radio-button"
                      />
                      <span className="investment-amount">1 Lakh - 5 Lakh</span>
                    </div>
                    <div className="investment-container">
                      <input
                        onChange={(e) => setAmount(e.target.value)}
                        type="radio"
                        value="5 Lakh - 10 Lakh"
                        name="investment-amount"
                        className="radio-button"
                      />
                      <span className="investment-amount">
                        5 Lakh - 10 Lakh
                      </span>
                    </div>
                    <div className="investment-container">
                      <input
                        onChange={(e) => setAmount(e.target.value)}
                        type="radio"
                        value="10 Lakh - 50 Lakh"
                        name="investment-amount"
                        className="radio-button"
                      />
                      <span className="investment-amount">
                        10 Lakh - 50 Lakh
                      </span>
                    </div>
                    <div className="investment-container">
                      <input
                        onChange={(e) => setAmount(e.target.value)}
                        type="radio"
                        value="50 Lakh - 1 Crore"
                        name="investment-amount"
                        className="radio-button"
                      />
                      <span className="investment-amount">
                        50 Lakh - 1 Crore
                      </span>
                    </div>
                    <div className="investment-container">
                      <input
                        onChange={(e) => setAmount(e.target.value)}
                        type="radio"
                        value="1 Crore - 5 Crore"
                        name="investment-amount"
                        className="radio-button"
                      />
                      <span className="investment-amount">
                        1 Crore - 5 Crore
                      </span>
                    </div>
                    <div className="investment-container">
                      <input
                        onChange={(e) => setAmount(e.target.value)}
                        type="radio"
                        value="More than 5 Crore"
                        name="investment-amount"
                        className="radio-button"
                      />
                      <span className="investment-amount">
                        More than 5 Crore
                      </span>
                    </div>
                  </div>

                  <label>
                    Years of experience in investing{" "}
                    <span className="important">*</span>
                  </label>
                  <div className="investment-experiences">
                    <div className="experience-container">
                      <input
                        onChange={(e) =>
                          setExperienceOfInvesting(e.target.value)
                        }
                        type="radio"
                        value="0-2 years"
                        name="investment-experience"
                        className="radio-button"
                      />
                      <span className="investment-experience">0-2 years</span>
                    </div>
                    <div className="experience-container">
                      <input
                        onChange={(e) =>
                          setExperienceOfInvesting(e.target.value)
                        }
                        type="radio"
                        value="2-5 years"
                        name="investment-experience"
                        className="radio-button"
                      />
                      <span className="investment-experience">2-5 years</span>
                    </div>
                    <div className="experience-container">
                      <input
                        onChange={(e) =>
                          setExperienceOfInvesting(e.target.value)
                        }
                        type="radio"
                        value="5-10 years"
                        name="investment-experience"
                        className="radio-button"
                      />
                      <span className="investment-experience">5-10 years</span>
                    </div>
                    <div className="experience-container">
                      <input
                        onChange={(e) =>
                          setExperienceOfInvesting(e.target.value)
                        }
                        type="radio"
                        value="More than 10 years"
                        name="investment-experience"
                        className="radio-button"
                      />
                      <span className="investment-experience">
                        More than 10 years
                      </span>
                    </div>
                  </div>
                  {/* <label>
                    By when do you want to start investing{" "}
                    <span className="important">*</span>
                  </label>
                  <input className="input-box" placeholder="Type your answer" /> */}
                  <button
                    onClick={onCreateAccountClickHandler}
                    className="signup-button"
                    style={{ marginBottom: "0rem" }}
                  >
                    Sign Up
                  </button>
                  <button
                    onClick={() => {
                      setPersonalDetailsTabActive(true);
                      setInvestmentDetailsTabActive(false);
                      window.scrollTo(0, 0);
                    }}
                    className="back-button"
                  >
                    Back
                  </button>
                  <div
                    style={{
                      textAlign: "center",
                      color: "white",
                      marginBottom: "2rem",
                    }}
                  >
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
