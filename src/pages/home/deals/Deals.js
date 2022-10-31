import Footer from "../../../components/footer/Footer";
import "./deals.css";
import logo from "../../../assets/vectors/logo.svg";
import PartnerCard from "../../../components/partnerCard/PartnerCard";
import { Link, NavLink } from "react-router-dom";
import SideNav from "../../../components/sideNav/SideNav";
import { useCallback, useEffect, useState } from "react";
import { fetchDealsFromDatabase } from "../../../firebase/firebase";
import LoggedInNavbar from "../../../components/loggedInNavbar/LoggedInNavbar";
import { useDispatch, useSelector } from "react-redux";
import { setDeal } from "../../../redux/deal/dealSlice";

const Deals = () => {
  const dispatch = useDispatch();
  const [deals, setDeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchDeals = useCallback(async () => {
    setIsLoading(true);
    const results = await fetchDealsFromDatabase();
    if (results.length) {
      setDeals([...results]);
      console.log("Results", results);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchDeals();
  }, []);
  

  return (
    <>
      <LoggedInNavbar />
      <div className="deal">
        <div className="deal_side-nav">
          <SideNav />
        </div>
        <div className="deal-wrap">
          <div className="deal-wrap__search">
            <h1>
              Explore <span className="badge">deals</span>
            </h1>

            <input
              className="deal-search__input"
              placeholder="Search your deals"
            />
          </div>
          <hr
            style={{
              border: "1px solid #0077B7",
              width: "60%",
            }}
          />
          <div className="live-deal__wrap">
            <div className="deal__content">
              <h1>
                <span className="badge">Live</span> deals
              </h1>
              <p>
                Lorem Ipsum is a dummy text used for typesettings and
                typewritting
              </p>
            </div>
            <div className="deal__card">
              {isLoading
                ? "fetching deals..."
                : deals.map((data) => (
                    <Link
                      onClick={(e) => {
                        dispatch(setDeal(data));
                      }}
                      key={data.id}
                      className="deal_card-link"
                      to={`${data.id}`}
                    >
                      <PartnerCard key={data.id} data={data} />
                    </Link>
                  ))}
            </div>
          </div>
          <hr
            style={{
              border: "1px solid #0077B7",
              width: "60%",
            }}
          />
          <div className="uder-due-diligence__deal__wrap uder-due-diligence__deal__wrap-center">
            <div className="deal__content">
              <h1>
                <span className="badge">Under</span> due diligence
              </h1>
              <p>
                Lorem Ipsum is a dummy text used for typesettings and
                typewritting
              </p>
            </div>
            <div className="deal__card"></div>
          </div>

          <div className="due-diligence__deal__wrap">
            <div className="deal__content">
              <h1>
                <span className="badge">Due</span> diligence
              </h1>
              <p>
                Lorem Ipsum is a dummy text used for typesettings and
                typewritting
              </p>
            </div>
            <div className="deal__card"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Deals;