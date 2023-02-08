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
import { fetchDealFromDatabase, getDealById } from "../../../firebase/firebase";
const AboutDeal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { deal_Id } = useParams();
  // const deal = useSelector((state) => state.deal.deal);
  // console.log(deal);
  const [dealInfo, setDealInfo] = useState("");
  // const fetchDeal = useCallback(async () => {
  //   setIsLoading(true);
  //   const results = await fetchDealFromDatabase(deal_Id);
  //   setDeal(results);
  //   setIsLoading(false);
  // }, []);

  useEffect(() => {
    async function fetchDeal() {
      setIsLoading(true);
      const dealInfo = await getDealById(deal_Id);
      setDealInfo(dealInfo);
      // console.log(dealInfo);
      setIsLoading(false);
    }
    fetchDeal();
  }, [deal_Id]);

  // const {
  //   cardImages,
  //   dealDetails,
  //   dealDescription,
  //   investors,
  //   dealHighlight,
  //   Links,
  // } = deal;

  // const { description } = deal?.dealDescription;
  // const {
  //   name,
  //   raised,
  //   date,
  //   type,
  //   headquarter,
  //   firm,
  //   noOfEmployees,
  //   incorporationDate,
  //   sectorsOfInvestment,
  // } = dealDetails;
  // const { videoLink, twitter, instagram, linkedIn, website } = Links;
  // const { logo } = cardImages;

  const logo_img =
    dealInfo?.cardImages?.logo?.logoUrl || "https://i.imgur.com/es6VRIM.jpg";
  const getRemainingDays = () => {
    let remainingDays =
      31 -
      dealInfo?.dealDetails?.date.substring(
        8,
        dealInfo?.dealDetails?.date.length
      );
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
                    <div className="logo_image">
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          boxShadow: "0 0 3px #ccc",
                        }}
                        src={logo_img}
                        alt="logo"
                      />
                    </div>
                    <h1>{dealInfo?.dealDetails?.name}</h1>
                  </div>

                  {dealInfo?.Links?.videoLink ? (
                    <iframe
                      className="aboutdeal__video"
                      src={videoUrlEmbed(dealInfo?.Links?.videoLink)}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      className="background_img_deal"
                      src={logo_img}
                      alt="logo"
                    />
                  )}
                </div>
                <div className="aboutdeal__head-content">
                  <h3>{dealInfo?.dealDetails?.type}</h3>
                  <p>{dealInfo?.dealDescription?.description || ""}</p>
                </div>
                <div className="aboutdeal__stats-wrap">
                  <progress
                    id="file"
                    value={dealInfo?.dealDetails?.raised}
                    max="100"
                    className="aboutdeal__progress"
                  />
                  <div className="aboutdeal__stats">
                    <div className="aboutdeal__stat">
                      <h2 style={{ margin: 0 }}>Raised</h2>
                      <br />
                      <span style={{ color: "#0077B7" }}>
                        <h2 style={{ margin: "-1rem 0rem 0rem 0rem" }}>
                          {dealInfo?.dealDetails?.raised}%
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
                          {dealInfo?.investors?.length}
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
                      <h3>{dealInfo?.dealDetails?.headquarter}</h3>
                      <h3>{dealInfo?.dealDetails?.firm}</h3>
                      <h3>{dealInfo?.dealDetails?.noOfEmployees}</h3>
                      <br />
                      <div className="aboutdeal__overview-social-links">
                        <a
                          href={dealInfo?.Links?.instagram}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={instagram_Img} alt="insta-link" />
                        </a>
                        <a
                          href={dealInfo?.Links?.linkedIn}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={linkedIn_Img} alt="linkedin-link" />
                        </a>
                        <a
                          href={dealInfo?.Links?.twitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={twitter_Img} alt="twitter-link" />
                        </a>
                      </div>
                      <br />
                      <div className="aboutdeal__overview-social-tags">
                        {dealInfo?.dealDetails?.sectorsOfInvestment?.map(
                          (data) => (
                            <span className="aboutdeal__overview-social-tag">
                              {data}
                            </span>
                          )
                        )}
                      </div>
                      <br />
                      <h3>{dealInfo?.dealDetails?.type}</h3>
                      <h3 style={{ marginTop: "-4px" }}>
                        <a
                          href={`${dealInfo?.Links?.website}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {dealInfo?.Links?.website}
                        </a>
                      </h3>
                      <h3>{dealInfo?.dealDetails?.incorporationDate}</h3>
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
                    {dealInfo?.dealHighlight?.map((data) => (
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
