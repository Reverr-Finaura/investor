import "./Analytics.css";
import Footer from "../../../components/footer/Footer";
import LoggedInNavbar from "../../../components/loggedInNavbar/LoggedInNavbar";
import DealSideNav from "../../../components/dealsidenav/DealSideNav";
import guyWorkig from "../../../assets/img/guy_working.png";
import { useState } from "react";

const Analytics = () => {
  const [email, setEmail] = useState("");
  const onEmailEnterHandler = (value) => {
    setEmail(value);
  };

  return (
    <>
      <LoggedInNavbar />
      <div className="analytics__main">
        <div className="analytics__side-nav">
          <DealSideNav />
        </div>
        <div className="analytics__right">
          <img src={guyWorkig} alt="guy-working" />
          <h1 style={{ color: "#0077B7", fontWeight: "900" }}>We are coding</h1>
          <div className="analytics__coming-soon">COMING SOON</div>
          <p style={{ fontWeight: "900", width: "50%", textAlign: "center" }}>
            From automation of people processes to creating an engage and driven
            culture
          </p>
          <div className="analytics__notify-wrap">
            <input
              onChange={(e) => onEmailEnterHandler(e.target.value)}
              placeholder="Enter Your Email address"
              className="analytics__email-input-box"
            />
            <button className="analytics__notify-me">Notify me</button>
          </div>
          <p>Get notified when we launch</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Analytics;
