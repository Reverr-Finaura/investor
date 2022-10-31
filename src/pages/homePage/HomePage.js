import "./HomePage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import group from "../../assets/img/group.png";
import cardImage from "../../assets/img/card_image.png";
import profileIcon from "../../assets/img/profile-icon.png";
import searchIcon from "../../assets/img/search-icon.png";
import rupeeIcon from "../../assets/img/rupee-icon.png";
import ProfileChecked from "../../assets/img/profileChecked.png";
// import { Search } from "react-bootstrap-icons";
import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import platformFeatures from "../../assets/img/platform-features.png";
import {
  fetchDealsFromDatabase,
  fetchBlogsFromDatabase,
} from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setBlog, setBlogs } from "../../redux/blogs/blogsSlice";
import { setDeal, setDeals } from "../../redux/deal/dealSlice";
import PartnerCard from "../../components/partnerCard/PartnerCard";
import BlogCard from "../../components/blogCard/BlogCard";
import { Link } from "react-router-dom";
import { ArrowRepeat } from "react-bootstrap-icons";

const HomePage = () => {
  const [investorTabActive, setInvestorTabActive] = useState(true);
  const [startupTabActive, setStartupTabActive] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const fetchDeals = useCallback(async () => {
    setIsLoading(true);
    const results = await fetchDealsFromDatabase();
    dispatch(setDeals(results));
    setIsLoading(false);
  }, []);

  const fetchBlogs = useCallback(async () => {
    setIsLoading(true);
    const results = await fetchBlogsFromDatabase();
    dispatch(setBlogs(results));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchDeals();
    fetchBlogs();
  }, []);

  const blogs = useSelector((state) => state.blogs.blogs);
  const deals = useSelector((state) => state.deal.deals);

  return (
    <>
      <Navbar />
      <div className="home__main">
        <div className="home__top-section">
          <div className="group-image-wrap">
            <img src={group} alt="group" />
          </div>
          <div className="home__top-section-content">
            <div className="home__top-section-heading">
              REVERR VENTURE <span style={{ color: "#0077B7" }}>PARTNERS</span>
              <hr style={{ border: "1px solid #0077B7", width: "167px" }} />
            </div>
            <div className="home__top-section-para">
              Lorem Ipsum is a dummy text used for typesettings and typewritting
              <hr style={{ border: "1px solid #0077B7", width: "167px" }} />
              <br />
              <span style={{ fontSize: "18px", fontWeight: "500" }}>
                Lorem Ipsum is a dummy text used for typesettings and
                typewritting
              </span>
            </div>
          </div>
        </div>
        <div className="home__achievements">
          <div className="home__achievement">
            <div style={{ fontSize: "40px", fontWeight: "900" }}>200+</div>
            Startups Registered
          </div>
          <div className="home__achievement">
            <div style={{ fontSize: "40px", fontWeight: "900" }}>25+</div>Team
            Members
          </div>
          <div className="home__achievement">
            <div style={{ fontSize: "40px", fontWeight: "900" }}>5 Cr+</div>
            Funds Raised
          </div>
          <div className="home__achievement">
            <div style={{ fontSize: "40px", fontWeight: "900" }}>100+</div>
            Investors Onboard
          </div>
        </div>
        <hr style={{ width: "50%", border: "1px solid #0077B7" }} />
        <div className="home__invest-with-rvp">
          <h1 style={{ fontSize: "40px" }}>
            Invest with Reverr venture{" "}
            <span style={{ color: "#0077B7" }}>partners</span>
          </h1>
          <div
            style={{ fontSize: "40px", fontWeight: "900", color: "#0077B7" }}
          >
            Live deals
          </div>
          <p style={{ opacity: "0.63" }}>
            Lorem Ipsum is a dummy text used for typesettings and typewritting
          </p>
          <div className="home__deal-cards">
            <div className="deal__card">
              {isLoading ? (
                <h1 style={{ opacity: "0.8" }}>
                  <ArrowRepeat className="loading-state" />
                </h1>
              ) : (
                deals.map((data) => <PartnerCard key={data.id} data={data} />)
              )}
            </div>
          </div>
          <button className="home__invest-now-button">Invest Now</button>
        </div>
        <hr style={{ width: "50%", border: "1px solid #0077B7" }} />
        <div className="home__platform-features">
          <h1 style={{ fontSize: "35px" }}>
            Platform <span style={{ color: "#0077B7" }}>Features</span>
          </h1>
          <br />
          <img
            src={platformFeatures}
            alt="platform-features"
            width="70%"
            style={{ pointerEvents: "none" }}
          />
        </div>
        <hr style={{ width: "50%", border: "1px solid #0077B7" }} />
        <div className="home__how-we-work">
          <h1 style={{ fontSize: "35px" }}>
            How we <span style={{ color: "#0077B7" }}>work?</span>
          </h1>
          <div className="home__investor-starup-switch-tab">
            <div
              className="home__investor-tab"
              onClick={() => {
                setInvestorTabActive(true);
                setStartupTabActive(false);
              }}
              style={{ backgroundColor: investorTabActive ? "#fff" : null }}
            >
              Investors
            </div>
            <div
              className="home__startup-tab"
              onClick={() => {
                setStartupTabActive(true);
                setInvestorTabActive(false);
              }}
              style={{ backgroundColor: startupTabActive ? "#fff" : null }}
            >
              Startups
            </div>
          </div>

          {/* Investor Card */}
          {investorTabActive && (
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
          )}

          {/* Startup Card */}

          {startupTabActive && (
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
          )}
        </div>
        <hr style={{ width: "50%", border: "1px solid #0077B7" }} />
        <div className="home__reverr-blogs">
          <div className="home__blogs-head">
            <h1>REVERR BLOGS</h1>
          </div>
          <div>
            <input placeholder="Search" className="home__blogs-search-input" />
          </div>
          {isLoading ? (
            <h1 style={{ opacity: "0.8" }}>
              <ArrowRepeat className="loading-state" />
            </h1>
          ) : (
            <div className="home__blogs-fetched">
              {blogs.map((data) => (
                <Link
                  onClick={() => {
                    dispatch(setBlog(data));
                  }}
                  key={data.id}
                  to={`${data.id}/blog`}
                  className="blog-card__link"
                >
                  <BlogCard key={data.id} data={data} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
