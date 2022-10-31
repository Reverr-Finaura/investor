import "./portfolio.css";
import Footer from "../../../components/footer/Footer";
import SideNav from "../../../components/sideNav/SideNav";
import LoggedInNavbar from "../../../components/loggedInNavbar/LoggedInNavbar";
import { Search } from "react-bootstrap-icons";
import InvestedStartupCard from "../../../components/investedStartupCard/InvestedStartupCard";
import PartnerCard from "../../../components/partnerCard/PartnerCard";
import zepp from "../../../assets/img/Rectangle 2990.png";
import hallmark from "../../../assets/img/Rectangle 2992.png";
import { useState, useEffect, useCallback } from "react";
import { fetchDealsFromDatabase } from "../../../firebase/firebase";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { setDeals } from "../../../redux/deal/dealSlice";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchDeals = useCallback(async () => {
    setIsLoading(true);
    const results = await fetchDealsFromDatabase();
    dispatch(setDeals(results));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchDeals();
  }, []);

  const dealsInvestedIn = useSelector((state) => state.deal.deals);

  return (
    <>
      <LoggedInNavbar />
      <div className="portfolio__main">
        <div className="portfolio__side-nav">
          <SideNav />
        </div>
        <div className="portfolio__right">
          <h1 style={{ color: "#0077B7", textAlign: "center" }}>Portfolio</h1>

          <div className="portfolio__top-bar">
            <select name="amount" id="amount" className="portfolio__dropdown">
              <option value="1">INR - Indian Rupee</option>
              <option value="2">USD - US Dollar</option>
              <option value="3">GBP - Pound Sterling</option>
            </select>
            <hr
              style={{
                width: "7%",
                transform: "rotate(90deg)",
                border: "2px solid #2A72DE",
              }}
            />
            <h3 style={{ color: "#000" }}>Tax Documents</h3>
            <hr
              style={{
                width: "7%",
                transform: "rotate(90deg)",
                border: "2px solid #2A72DE",
              }}
            />
            <Search style={{ color: "#555555", cursor: "pointer" }} />
          </div>
          <div className="portfolio__investments">
            <div
              style={{ color: "#0077B7", fontSize: "20px", fontWeight: "bold" }}
            >
              Your Investments
            </div>
            <div>
              <b>2.9 Lakhs</b> in 4 businesses
            </div>
          </div>
          <div className="portfolio__no-of-startup-invested-in">
            <div
              style={{ color: "#0077B7", fontSize: "20px", fontWeight: "bold" }}
            >
              No. of Start-ups invested in
            </div>
            <div>
              <b>4</b> (Four)
            </div>
          </div>
          <div className="portfolio__startups-invested-in">
            <div
              style={{ color: "#0077B7", fontSize: "20px", fontWeight: "bold" }}
            >
              Start-ups invested in
            </div>
            <div className="portfolio_starup-invested-card">
              <InvestedStartupCard name="ZEPP" image={zepp} />
              <InvestedStartupCard name="HALLMARK" image={hallmark} />
              <InvestedStartupCard name="ZEPP" image={zepp} />
              <InvestedStartupCard name="HALLMARK" image={hallmark} />
            </div>
          </div>
          <div className="portfolio__current-portfolio-value">
            <div
              style={{ color: "#0077B7", fontSize: "20px", fontWeight: "bold" }}
            >
              Current portfolio value
            </div>
            <h3>4.5 Lakhs</h3>
          </div>
          <div className="portfolio__deals-of-startup-invested-in">
            <div
              style={{ color: "#0077B7", fontSize: "20px", fontWeight: "bold" }}
            >
              Details of startup invested in
            </div>
            <div className="portfolio__deals-fetched-cards">
              {isLoading ? (
                <h4 style={{ opacity: "0.8" }}>
                  Fething Startup Deals invested in...
                </h4>
              ) : (
                dealsInvestedIn.map((data) => (
                  <PartnerCard key={data.id} data={data} />
                ))
              )}
            </div>
          </div>
          <div className="portfolio__investment-by">
            <div
              style={{ color: "#0077B7", fontSize: "20px", fontWeight: "bold" }}
            >
              Investment by
            </div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: "1rem",
                marginLeft: "16.5rem",
              }}
            >
              Sector Wise
            </div>
            <Chart
              style={{ marginTop: "1rem" }}
              type="donut"
              width={400}
              height={400}
              series={[36, 15, 30, 14, 40, 20]}
              options={{
                labels: [
                  "Financials 100%",
                  "Energy 100%",
                  "Debt 100%",
                  "Materials 100%",
                  "Information 100%",
                  "Health care 100%",
                ],
                dataLabels: {
                  enabled: false,
                },
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
