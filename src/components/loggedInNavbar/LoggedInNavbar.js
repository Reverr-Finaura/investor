import "./LoggedInNavbar.css";
import logo from "../../assets/vectors/Reverr Black 2.png";
import { useNavigate } from "react-router-dom";
import { Bell, QuestionCircle, Person } from "react-bootstrap-icons";

const LoggedInNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="logged-in__navbar">
      <div className="logged-in__reverr">
        <img src={logo} alt="reverr-logo" className="logged-in__logo" />
        <div className="logged-in__title">REVERR VENTURE PARTNERS</div>
      </div>
      <div className="logged-in__links">
        <span className="logged-in__link">
          <Bell />
        </span>
        <span className="logged-in__link">
          <QuestionCircle />
        </span>
        <span className="logged-in__link" onClick={() => navigate("/profile")}>
          <Person />
        </span>
      </div>
    </div>
  );
};

export default LoggedInNavbar;
