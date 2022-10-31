import Navbar from "../../components/navbar/Navbar";
import enlighten from "../../assets/img/enlighten.png";
import "./LandingPageInvestors.css";
import cardImage from "../../assets/img/card_image.png";
import profileIcon from "../../assets/img/profile-icon.png";
import searchIcon from "../../assets/img/search-icon.png";
import rupeeIcon from "../../assets/img/rupee-icon.png";
import Footer from "../../components/footer/Footer";
import accessiblity from "../../assets/img/accessiblity.png";
import screening from "../../assets/img/screening.png";
import learning from "../../assets/img/learning.png";
import portfolio from "../../assets/img/portfolio.png";
import { useNavigate } from "react-router-dom";
import LandingInvestorBottom from "../../components/landingInvestorBottom/LandingInvestorBottom";

export const LandingPageInvestors = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="landing__top-section-wrap">
        <Navbar />
        <div className="landing__top-section">
          <div className="landing__top-section-content">
            <div className="landing__top-section-heading">
              REVERR VENTURE <span style={{ color: "#0077B7" }}>PARTNERS</span>
              <hr style={{ border: "1px solid #0077B7", width: "167px" }} />
            </div>
            <div className="landing__top-section-para">
              Lorem Ipsum is a dummy text used for typesettings and typewritting
              <hr style={{ border: "1px solid #0077B7", width: "167px" }} />
              <br />
              <span style={{ fontSize: "18px", fontWeight: "500" }}>
                Lorem Ipsum is a dummy text used for typesettings and
                typewritting
              </span>
            </div>
          </div>
          <div className="enlighten-image-wrap">
            <img src={enlighten} alt="enlighten" className="enlighten-image" />
          </div>
        </div>
      </div>
      <hr
        style={{
          border: "1px solid #0077B7",
          width: "50%",
          marginBottom: "2%",
        }}
      />
      <div className="landing-page__investment-flow">
        <div className="lading-page__investment-flow-heading">
          Investment <span style={{ color: "#0077B7" }}>Flow</span>
        </div>
        <div className="investment__flow">
          <div className="investment__flow-card">
            <div className="ellipse-bg" style={{ backgroundColor: "#E13535" }}>
              1.
              <img
                src={require("../../assets/img/investorsPageIcons/handshake.png")}
                style={{ marginTop: "0.5rem" }}
                alt="icon"
              />
            </div>
            <div style={{ fontSize: "25px", fontWeight: "900" }}>
              Deals come
            </div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div className="investment__flow-card">
            <div className="ellipse-bg" style={{ backgroundColor: "#EB7911" }}>
              2.
              <img
                src={require("../../assets/img/investorsPageIcons/eye.png")}
                style={{ marginTop: "0.5rem" }}
                alt="icon"
              />
            </div>
            <div style={{ fontSize: "25px", fontWeight: "900" }}>Screening</div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div className="investment__flow-card">
            <div className="ellipse-bg" style={{ backgroundColor: "#45D313" }}>
              3.
              <img
                src={require("../../assets/img/investorsPageIcons/tv.png")}
                style={{ marginTop: "0.5rem" }}
                alt="icon"
              />
            </div>
            <div style={{ fontSize: "25px", fontWeight: "900" }}>
              Deal goes live
            </div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div className="investment__flow-card">
            <div className="ellipse-bg" style={{ backgroundColor: "#1392DA" }}>
              4.
              <img
                src={require("../../assets/img/investorsPageIcons/bell.png")}
                style={{ marginTop: "0.5rem" }}
                alt="icon"
              />
            </div>
            <div style={{ fontSize: "25px", fontWeight: "900" }}>
              Notification
            </div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div className="investment__flow-card">
            <div className="ellipse-bg" style={{ backgroundColor: "#6315E3" }}>
              5.
              <img
                src={require("../../assets/img/investorsPageIcons/message.png")}
                style={{ marginTop: "0.5rem" }}
                alt="icon"
              />
            </div>
            <div style={{ fontSize: "25px", fontWeight: "900" }}>
              AMA Session
            </div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div className="investment__flow-card">
            <div className="ellipse-bg" style={{ backgroundColor: "#D712DB" }}>
              6.
              <img
                src={require("../../assets/img/investorsPageIcons/rupee.png")}
                style={{ marginTop: "0.5rem" }}
                alt="icon"
              />
            </div>
            <div style={{ fontSize: "25px", fontWeight: "900" }}>Invest</div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
        </div>
        <button
          className="apply-to-invest__button"
          onClick={() => navigate("/signup")}
        >
          Apply to invest
        </button>
      </div>
      <hr
        style={{
          border: "1px solid #0077B7",
          width: "50%",
          marginBottom: "2%",
        }}
      />
      <div className="landing-page__investment-thesis">
        <div className="lading-page__investement-thesis-heading">
          Investment <span style={{ color: "#0077B7" }}>Thesis</span>
        </div>
        <p className="investment-thesis__paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="investment-thesis__cards">
          <div className="investment-thesis__card">
            <img src={accessiblity} alt="accessiblity" />
            <div className="investment-thesis__card-heading">Accessiblity</div>
            <p style={{ textAlign: "center", color: "#0077B7" }}>
              RVP invests in asset-light and scalable businesses with proof of
              concept or an existing customer base and revenue traction.
            </p>
          </div>
          <div className="investment-thesis__card">
            <img src={screening} alt="screening" />
            <div className="investment-thesis__card-heading">Screening</div>
            <p style={{ textAlign: "center", color: "#0077B7" }}>
              RVP invests in asset-light and scalable businesses with proof of
              concept or an existing customer base and revenue traction.
            </p>
          </div>
          <div className="investment-thesis__card">
            <img src={learning} alt="learning" />
            <div className="investment-thesis__card-heading">
              Learning Experience
            </div>
            <p style={{ textAlign: "center", color: "#0077B7" }}>
              RVP invests in asset-light and scalable businesses with proof of
              concept or an existing customer base and revenue traction.
            </p>
          </div>
          <div className="investment-thesis__card">
            <img src={portfolio} alt="portfolio" />
            <div className="investment-thesis__card-heading">Portfolio</div>
            <p style={{ textAlign: "center", color: "#0077B7" }}>
              RVP invests in asset-light and scalable businesses with proof of
              concept or an existing customer base and revenue traction.
            </p>
          </div>
        </div>
      </div>
      <hr
        style={{
          border: "1px solid #0077B7",
          width: "50%",
          marginBottom: "2%",
        }}
      />
      <div className="lading-page__main">
        <div className="lading-page__main-heading">
          Register as <span style={{ color: "#0077B7" }}>Investor</span>
        </div>
        <div className="landing__investor-content-wrap">
          <div className="landing__investor-card-wrap">
            <div className="landing__investor-card">
              <div className="landing__investor-card-content-wrap">
                <div>
                  <div
                    style={{
                      fontSize: "26px",
                      fontWeight: "600",
                      color: "#0077B7",
                    }}
                  >
                    I am an
                    <br /> Investor
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#000",
                    }}
                  >
                    Lorem ipsum is a <br />
                    dummy text used
                    <br /> for typesettings .
                  </div>
                </div>
                <img
                  src={cardImage}
                  alt="man-with-tablet"
                  style={{ marginLeft: "1rem" }}
                />
              </div>
              <div
                style={{
                  color: "#0077B7",
                  margin: "1rem",
                  fontWeight: "600",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                Lorem ipsum is a dummy text used for typing
              </div>
              <button
                className="landing-page__signup-button"
                onClick={() => navigate("/signup")}
              >
                Apply to invest
              </button>
            </div>
          </div>
          <div className="landing__investor-options">
            <div className="landing__investor-option">
              <img src={profileIcon} alt="profile" />
              <div style={{ marginLeft: "1rem" }}>Create your profile</div>
            </div>
            <div
              className="landing__investor-option"
              style={{ transform: "translateX(40%)" }}
            >
              <img src={searchIcon} alt="profile" />
              <div style={{ marginLeft: "1rem" }}>Discover Startups</div>
            </div>
            <div className="landing__investor-option">
              <img src={rupeeIcon} alt="profile" />
              <div style={{ marginLeft: "1rem" }}>Start Investing</div>
            </div>
          </div>
        </div>
      </div>
      <LandingInvestorBottom />
      <br />
      <Footer />
    </>
  );
};

export default LandingPageInvestors;
