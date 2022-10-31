import DealSideNav from "../../../components/dealsidenav/DealSideNav";
import Footer from "../../../components/footer/Footer";
import LoggedInNavbar from "../../../components/loggedInNavbar/LoggedInNavbar";
import "./dealterm.css";
import { FileEarmarkArrowUp } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
const DealTerm = () => {
  const deal = useSelector((state) => state.deal.deal);
  const { dealDetails } = deal;
  const { minimumInvestment, preMoneyValuation, noOfEmployees, raised } =
    dealDetails;

  return (
    <>
      <LoggedInNavbar />
      <div className="deal-term">
        <div className="deal-term__side-nav">
          <DealSideNav />
        </div>
        <div className="deal-term__right-wrap">
          <div className="deal-term__document">
            <h1
              style={{
                color: "#0077B7",
                textAlign: "center",
              }}
            >
              Documents
            </h1>
            <div className="deal-term__document-content">
              <div className="deal-term__document-left__content">
                A due diligence report is a document prepped by an independent
                third party due diligence team which includes information
                related to financials, compliance, key risks and a lot more.
              </div>
              <div className="deal-term__document-right__content">
                <div className="deal-term__right__content1">
                  <h3>Company Certificates</h3>
                  <h2>
                    <FileEarmarkArrowUp />
                  </h2>
                </div>
                <div className="deal-term__right__content2">
                  <h3>Company Due Dilligence</h3>
                  <h2>
                    <FileEarmarkArrowUp />
                  </h2>
                </div>
                <button className="deal-term__download">Download</button>
              </div>
            </div>
            <h1
              style={{
                color: "#0077B7",
                textAlign: "center",
                marginTop: "5rem",
                marginBottom: "3rem",
              }}
            >
              Deal terms
            </h1>
            <div className="deal-term__terms-content">
              <div className="deal-term__terms-progress-wrap">
                <h3>
                  66.34k raised /{" "}
                  <span style={{ color: "#0077b7" }}> 12 days left</span>
                </h3>
                <progress id="file" value={raised} max="100" />
              </div>

              <div className="deal-term__terms-stats">
                <div className="deal-term__terms__stats-head">
                  <h3>Pre money valuation</h3>
                  <h3>Equity</h3>
                </div>
                <div className="deal-term__terms__stats-body">
                  <h3>₹{preMoneyValuation} Lakhs</h3>
                  <h3>1%</h3>
                </div>

                <div className="deal-term__terms__stats-head">
                  <h3>Minimum Investments</h3>
                  <h3>Investors</h3>
                </div>
                <div className="deal-term__terms__stats-body">
                  <h3>₹{minimumInvestment}</h3>
                  <h3>{noOfEmployees}</h3>
                </div>
              </div>

              <button className="deal-term__btn deal-term_interestedBtn">
                Interested
              </button>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DealTerm;
