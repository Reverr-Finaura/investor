import Footer from "../../../components/footer/Footer";
import LoggedInNavbar from "../../../components/loggedInNavbar/LoggedInNavbar";
import { useCallback, useEffect, useState } from "react";
import DealSideNav from "../../../components/dealsidenav/DealSideNav";
// import logo from "../../../assets/img/Rectangle 2741.png";
import instagram_Img from "../../../assets/img/instagram.png";
import linkedIn_Img from "../../../assets/img/linkedin.png";
import twitter_Img from "../../../assets/img/twitter.png";

import "./aboutdeal.css";
import { useSelector } from "react-redux";
import { videoUrlEmbed } from "../../../utils/utils";
import { useParams } from "react-router-dom";
import { fetchDealFromDatabase } from "../../../firebase/firebase";
const AboutDeal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { deal_Id } = useParams();
  const deal = useSelector((state) => state.deal.deal);
  // const [deal, setDeal] = useState([]);
  // const fetchDeal = useCallback(async () => {
  //   setIsLoading(true);
  //   const results = await fetchDealFromDatabase(deal_Id);
  //   setDeal(results);
  //   setIsLoading(false);
  // }, []);

  const {
    cardImages,
    dealDetails,
    dealDescription,
    investors,
    dealHighlight,
    Links,
  } = deal;

  const { description } = dealDescription;
  const {
    name,
    raised,
    date,
    type,
    headquarter,
    firm,
    noOfEmployees,
    incorporationDate,
    sectorsOfInvestment,
  } = dealDetails;
  const { videoLink, twitter, instagram, linkedIn, website } = Links;
  const { logo } = cardImages;
  const getRemainingDays = () => {
    let remainingDays = 31 - date.substring(8, date.length);
    return remainingDays;
  };

  // useEffect(() => {
  //   fetchDeal();
  // }, []);

  return (
    <>
      <LoggedInNavbar />
      <div className="aboutdeal">
        <div className="abousDeal-side__nav">
          <DealSideNav />
        </div>
        <div className="aboutdeal__right-wrap">
          <div className="aboutdeal__wrap">
            {isLoading ? (
              "Fetching data..."
            ) : (
              <>
                <div className="aboutdeal__head">
                  <div className="aboutdeal__logo">
                    <img
                      style={{
                        width: "100%",
                        borderRadius: "50%",
                        boxShadow: "0 0 3px #ccc",
                      }}
                      src={logo.logoUrl}
                      alt="logo"
                    />
                    <h1>{name}</h1>
                  </div>

                  <iframe
                    className="aboutdeal__video"
                    src={videoUrlEmbed(videoLink)}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                </div>
                <div className="aboutdeal__head-content">
                  <h3>{type}</h3>
                  <p>{description || ""}</p>
                </div>
                <div className="aboutdeal__stats-wrap">
                  <progress
                    id="file"
                    value={raised}
                    max="100"
                    className="aboutdeal__progress"
                  />
                  <div className="aboutdeal__stats">
                    <div className="aboutdeal__stat">
                      <h2 style={{ margin: 0 }}>Raised</h2>
                      <br />
                      <span style={{ color: "#0077B7" }}>
                        <h2 style={{ margin: "-1rem 0rem 0rem 0rem" }}>
                          {raised}%
                        </h2>
                      </span>
                    </div>
                    <hr
                      style={{
                        height: "40px",
                        borderLeft: "1.5px solid #0077B7",
                        backgroundColor: "#0077B7",
                      }}
                    />
                    <div className="aboutdeal__stat">
                      <h2 style={{ margin: 0 }}>Closes in</h2>
                      <span style={{ color: "#0077B7" }}>
                        <h2 style={{ margin: "0rem 0rem 0rem 0rem" }}>
                          {getRemainingDays()} Days
                        </h2>
                      </span>
                    </div>
                    <hr
                      style={{
                        height: "40px",
                        borderLeft: "1.5px solid #0077B7",
                        backgroundColor: "#0077B7",
                      }}
                    />
                    <div className="aboutdeal__stat">
                      <h2 style={{ margin: 0 }}>Investors</h2>
                      <br />
                      <span style={{ color: "#0077B7" }}>
                        <h2 style={{ margin: "-1rem 0rem 0rem 0rem" }}>
                          {investors.length}
                        </h2>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="aboutdeal__overview">
                  <h2 style={{ fontWeight: "300" }}>BUSINESS OVERVIEW</h2>
                  <div className="aboutdeal__overview-content">
                    <div className="aboutdeal__overview-left">
                      <h3>Headquaters</h3>
                      <h3>Firm</h3>
                      <h3>Employee</h3>
                      <br />
                      <h3>Social media</h3>
                      <br />
                      <h3 style={{ marginTop: "10px" }}>Sector</h3>
                      <br />
                      <h3>Type</h3>
                      <h3>Website</h3>
                      <h3>Incorporation date</h3>
                    </div>
                    <div className="aboutdeal__overview-right">
                      <h3>{headquarter}</h3>
                      <h3>{firm}</h3>
                      <h3>{noOfEmployees}</h3>
                      <br />
                      <div className="aboutdeal__overview-social-links">
                        <a href={instagram} target="_blank" rel="noreferrer">
                          <img src={instagram_Img} alt="insta-link" />
                        </a>
                        <a href={linkedIn} target="_blank" rel="noreferrer">
                          <img src={linkedIn_Img} alt="linkedin-link" />
                        </a>
                        <a href={twitter} target="_blank" rel="noreferrer">
                          <img src={twitter_Img} alt="twitter-link" />
                        </a>
                      </div>
                      <br />
                      <div className="aboutdeal__overview-social-tags">
                        {sectorsOfInvestment.map((data) => (
                          <span className="aboutdeal__overview-social-tag">
                            {data}
                          </span>
                        ))}
                      </div>
                      <br />
                      <h3>{type}</h3>
                      <h3 style={{ marginTop: "-4px" }}>
                        <a href={`${website}`} target="_blank" rel="noreferrer">
                          {website}
                        </a>
                      </h3>
                      <h3>{incorporationDate}</h3>
                    </div>
                  </div>
                  <button className="aboutdeal__overviewInterested-btn">
                    Intersted
                  </button>
                </div>

                <div className="aboutdeal__highlights">
                  <div className="aboutdeal__highlight-heading">
                    <h1>Highlights</h1>
                  </div>
                  <div className="aboutdeal__highlight-content">
                    {dealHighlight.map((data) => (
                      <li key={data.id}>{data.title}</li>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* end */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutDeal;
