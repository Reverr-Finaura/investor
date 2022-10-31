import Navbar from "../../components/navbar/Navbar";
import "./LandingPageInvestors.css";
import cardImage from "../../assets/img/card_image.png";
import profileIcon from "../../assets/img/profile-icon.png";
import rupeeIcon from "../../assets/img/rupee-icon.png";
import Footer from "../../components/footer/Footer";
import startupsImg from "../../assets/img/startupsImg.png";
import ProfileChecked from "../../assets/img/profileChecked.png";
import Lifecycle from "../../assets/img/lifecycle.png";
import { useNavigate } from "react-router-dom";
import "./landingPageStartups.css";

export const LandingPageStartups = () => {
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
          <div className="enlighten-image-wrap startup-image-wrap">
            <img
              src={startupsImg}
              alt="enlighten"
              className="enlighten-image"
            />
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
          Startups <span style={{ color: "#0077B7" }}>Flow</span>
        </div>
        <div className="investment__flow">
          <div className="investment__flow-card">
            <div className="startups-pentagon-image">1.</div>
            <div style={{ fontSize: "25px", fontWeight: "900" }}>Apply</div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div className="investment__flow-card">
            <div className="ellipse-image startups-pentagon-image">2</div>
            <div style={{ fontSize: "25px", fontWeight: "900" }}>Evaluate</div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div className="investment__flow-card">
            <div className="ellipse-image startups-pentagon-image">3.</div>
            <div style={{ fontSize: "25px", fontWeight: "900" }}>Screening</div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div className="investment__flow-card ">
            <div className="ellipse-image startups-pentagon-image">4.</div>
            <div style={{ fontSize: "25px", fontWeight: "900" }}>
              Engage & Pitch
            </div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div className="investment__flow-card">
            <div className="ellipse-image startups-pentagon-image">5.</div>
            <div style={{ fontSize: "25px", fontWeight: "900" }}>
              Terms Sheet & Deal Due Diligence
            </div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div className="investment__flow-card">
            <div className="ellipse-image startups-pentagon-image">6.</div>
            <div style={{ fontSize: "25px", fontWeight: "900" }}>Deal</div>
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
          Apply for Funding
        </button>
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
          How we <span style={{ color: "#0077B7" }}>Work?</span>
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
                    I am a
                    <br /> Start-up
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
                Apply for funding
              </button>
            </div>
          </div>
          <div className="landing__investor-options">
            <div className="landing__investor-option">
              <img src={ProfileChecked} alt="profile" />
              <div style={{ marginLeft: "1rem" }}>Instant Registration</div>
            </div>
            <div
              className="landing__investor-option"
              style={{ transform: "translateX(40%)" }}
            >
              <img src={profileIcon} alt="profile" />
              <div style={{ marginLeft: "1rem" }}>Create your profile</div>
            </div>
            <div className="landing__investor-option">
              <img src={rupeeIcon} alt="profile" />
              <div style={{ marginLeft: "1rem" }}>Apply for funding</div>
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
        <div className="landiing__startups-lifecycle">
          <h1>
            Complete Platform Across the{" "}
            <span style={{ color: "#0077B7" }}>
              Lifecycle <br /> of Raising Start-ups
            </span>
          </h1>

          <p>
            I'm a paragraph. Click here to add your own text and edit me. I'm a{" "}
            <br />
            paragraph. Click here to add your own text and edit me or you can
            <br />
            just drag and drop. I'm a paragraph. Click here to add your own text
            <br />
          </p>
          <img src={Lifecycle} />
          <div className="landiing__startups-lifecycleBtn-wrap">
            <button>Explore Journey</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LandingPageStartups;
