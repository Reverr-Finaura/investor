import Footer from "../../../components/footer/Footer";
import "./dashboard.css";
import logo from "../../../assets/vectors/logo.svg";
import LoggedInNavbar from "../../../components/loggedInNavbar/LoggedInNavbar";
import PartnerCard from "../../../components/partnerCard/PartnerCard";
import { Link, NavLink } from "react-router-dom";
import SideNav from "../../../components/sideNav/SideNav";
import { forwardRef, useCallback, useEffect, useState } from "react";
import {
  fetchDealsFromDatabase,
  getUserFromDatabase,
  fetchBlogsFromDatabase,
} from "../../../firebase/firebase";
import leftBlogImage from "../../../assets/img/leftBlog.png";
import rightBlogImage from "../../../assets/img/rightBlog.png";
import bgImage from "../../../assets/img/Rectangle 2958.png";
import leftBlogBgImage from "../../../assets/img/Rectangle 2910.png";
import rightBlogBgImage1 from "../../../assets/img/Rectangle 2911.png";
import rightBlogBgImage2 from "../../../assets/img/Rectangle 2913.png";
import leftStartupImg from "../../../assets/img/Ellipse 304.png";
import {
  BarChartLineFill,
  ChatRightTextFill,
  HandIndexThumbFill,
  HandThumbsUpFill,
  Search,
} from "react-bootstrap-icons";
import Accordian from "../../../components/accordian/Accordian";
import { setDeals } from "../../../redux/deal/dealSlice";
import { setBlog, setBlogs } from "../../../redux/blogs/blogsSlice";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/user/userSlice";
import { ArrowRepeat } from "react-bootstrap-icons";
import BlogCard from "../../../components/blogCard/BlogCard";

const Dashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);
  const { calls } = user;
  const uid = JSON.parse(localStorage.getItem("uid"));

  const fetchUser = async () => {
    const results = await getUserFromDatabase("lQqFJTJBiAaaROvSfro0q8eXsB32");
    dispatch(login(results));
    setUser(results);
    // console.log(user);
  };

  const fetchBlogs = useCallback(async () => {
    setIsLoading(true);
    const results = await fetchBlogsFromDatabase();
    dispatch(setBlogs(results));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUser();
    fetchBlogs();
  }, []);

  const blogs = useSelector((state) => state.blogs.blogs);

  const faqReverr = [
    {
      id: 1,
      Q: "What is Reverr Venture Partners ?",
      A: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      Q: "What does Reverr Venture Partners offer ?",
      A: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      Q: "How is Reverr Venture Partners a solutions ?",
      A: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 4,
      Q: "What does Reverr Venture Partners makes it standout ?",
      A: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  return (
    <>
      <LoggedInNavbar />
      <div className="dashboard">
        <div className="dashboard__side-nav">
          <SideNav />
        </div>
        <div className="dashboard__right-wrap">
          <div className="dashboard-stats">
            <div className="dashboard__stats-wrap">
              <div className="dashboard__stats-left">
                <h1>0.0k</h1>
                <p>Total Investment Value</p>
              </div>
              <div className="dashboard__stats-right">
                <h1>0</h1>
                <p>Startups Invested In</p>
              </div>
            </div>
            <div className="dashboard__stats-investments">
              <Link className="Link" to="/investments">
                View all your investments
              </Link>
            </div>
          </div>
          <hr
            style={{
              border: "1px solid #0077B7",
              width: "600px",
              marginTop: "5%",
            }}
          />

          <div className="dashboard-calls">
            <h1>Your calls</h1>
            <div className="dashboard-calls_wrap">
              <div className="dashboard__calls-left">
                <h1>LOGO</h1>
              </div>
              <div className="dashboard__calls-right">
                <h1>ACME INC.</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text .
                </p>
                <div className="dashboard__calls-date">
                  <p>11th August 2022</p>
                  <p>At 1300 hours</p>
                </div>
                <div className="dashboard__calls-btn">
                  <button className="dashboard__calls-btn-proceed">
                    Proceed
                  </button>
                  {/* <button className="dashboard__calls-btn-reschedule">
                    Reschedule
                  </button> */}
                </div>
              </div>
            </div>

            <div className="dashboard-calls_wrap">
              <div className="dashboard__calls-left">
                <h1>LOGO</h1>
              </div>
              <div className="dashboard__calls-right">
                <h1>ACME INC.</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text .
                </p>
                <div className="dashboard__calls-date">
                  <p>11th August 2022</p>
                  <p>At 1300 hours</p>
                </div>
                <div className="dashboard__calls-btn">
                  <button className="dashboard__calls-btn-proceed">
                    Proceed
                  </button>
                  {/* <button className="dashboard__calls-btn-reschedule">
                    Reschedule
                  </button> */}
                </div>
              </div>
            </div>
          </div>

          <hr
            style={{
              border: "1px solid #0077B7",
              width: "600px",
              marginTop: "5%",
              marginBottom: "5%",
            }}
          />

          <div className="home__reverr-blogs" style={{ margin: "1rem 0" }}>
            <div className="home__blogs-head">
              <h1>REVERR BLOGS</h1>
            </div>
            <div>
              <input
                placeholder="Search"
                className="home__blogs-search-input"
              />
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

          <hr
            style={{
              border: "1px solid #0077B7",
              width: "600px",
              marginTop: "10%",
              marginBottom: "5%",
            }}
          />

          <div className="dashboard__faqs">
            <h1 style={{ color: "#2a72de", textAlign: "center" }}>FAQs</h1>
            {faqReverr.map((faq) => (
              <Accordian key={faq.id} {...faq} />
            ))}
            <div className="dasboard__contact-wrap">
              <p style={{ marginBottom: "1rem" }}>
                Didn’t get what you’re looking for ? <br /> Write your query and
                we would answer as soon as possible
              </p>
              <input
                className="dasboard__contact-input"
                placeholder="Type here..."
              />
              <button className="dasboard__contact-btn">SEND</button>
            </div>
          </div>

          <hr
            style={{
              border: "1px solid #0077B7",
              width: "600px",
              marginTop: "10%",
              marginBottom: "5%",
            }}
          />

          <div className="dashboard__startups">
            <h1>
              From the <span style={{ color: "#2a72de" }}>startups</span>
            </h1>
            <div className="dashboard__startups-content">
              <div className="dashboard__startups-leftcontent">
                <img src={leftStartupImg} />
              </div>
              <div className="dashboard__startups-rightcontent">
                <h3>Jatin Khurana</h3>
                <h4>5 hrs ago</h4>
                <p
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Lorem Ipsum is a dummy text used for typesettings and
                  typewrittingLorem Ipsum is a dummy text used for typesettings
                  and typewritting
                </p>
                <span
                  style={{
                    color: "grey",
                    marginTop: "10px",
                  }}
                >
                  <HandThumbsUpFill /> 5 Upvots
                </span>

                <span
                  style={{
                    color: "grey",
                    marginLeft: "20px",
                  }}
                >
                  <ChatRightTextFill /> 5 Upvots
                </span>
              </div>
            </div>

            <div className="dashboard__startups-content">
              <div className="dashboard__startups-leftcontent">
                <img src={leftStartupImg} />
              </div>
              <div className="dashboard__startups-rightcontent">
                <h3>Jatin Khurana</h3>
                <h4>5 hrs ago</h4>
                <p
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Lorem Ipsum is a dummy text used for typesettings and
                  typewrittingLorem Ipsum is a dummy text used for typesettings
                  and typewritting
                </p>
                <span
                  style={{
                    color: "grey",
                    marginTop: "10px",
                  }}
                >
                  <HandThumbsUpFill /> 5 Upvots
                </span>

                <span
                  style={{
                    color: "grey",
                    marginLeft: "20px",
                  }}
                >
                  <ChatRightTextFill /> 5 Upvots
                </span>
              </div>
            </div>
          </div>

          <hr
            style={{
              border: "1px solid #0077B7",
              width: "600px",
              marginTop: "5%",
              marginBottom: "5%",
            }}
          />

          <div className="dashboard__startupdeals">
            <h1>Deals for you</h1>
            <h2>You recently viewed</h2>
            <div className="Dashboard__startupdeals-card_wrap">
              <h3>View more...</h3>
            </div>
          </div>

          {/* end */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
