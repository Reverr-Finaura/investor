import "./Navbar.css";
import logo from "../../assets/vectors/Reverr Black 2.png";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const loginButtonClickHandler = () => {
    navigate("/");
  };

  const signupButtonClickHandler = () => {
    navigate("/signup");
  };

  return (
    <div id="navbar" className="navbar">
      <div className="reverr">
        <img src={logo} alt="reverr-logo" className="logo" />
        <div className="title">REVERR VENTURE PARTNERS</div>
      </div>
      <div className="links">
        <NavLink to="/home" className="link">
          Home
        </NavLink>
        <NavLink to="/startups" className="link">
          Startups
        </NavLink>
        <NavLink to="/investors" className="link">
          Investors
        </NavLink>
        <NavLink
          to="/about-us"
          className="link"
          style={{ textAlign: "center" }}
        >
          About Us
        </NavLink>
        <button className="login" onClick={loginButtonClickHandler}>
          Log in
        </button>
        <button className="signup" onClick={signupButtonClickHandler}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
