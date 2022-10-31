import "./pitchDeck.css";
import DealSideNav from "../../../components/dealsidenav/DealSideNav";
import Footer from "../../../components/footer/Footer";
import LoggedInNavbar from "../../../components/loggedInNavbar/LoggedInNavbar";
import { useSelector } from "react-redux";

const PitchDeck = () => {
  const deal = useSelector((state) => state.deal.deal);
  const { pitchDeck } = deal;
  const pitchDeckUrl = pitchDeck.docUrl;

  let meetings = [
    {
      meetingDetails: {
        time: "",
        date: "",
        desc: "",
        meetingLinks: "",
        id: "",
      },
      interestedUser: [],
    },
  ];

  return (
    <>
      <LoggedInNavbar />
      <div className="pitchdeck">
        <div className="pitchdeck__side-nav">
          <DealSideNav />
        </div>
        <div className="pitchdeck__right-wrap">
          <iframe
            title="pitch-deck"
            src={pitchDeckUrl}
            width="100%"
            height="500px"
            frameborder="0"
            style={{ borderRadius: "10px" }}
          >
            This is an embedded{" "}
            <a target="_blank" href="https://office.com" rel="noreferrer">
              Microsoft Office
            </a>{" "}
            presentation, powered by{" "}
            <a
              target="_blank"
              href="https://office.com/webapps"
              rel="noreferrer"
            >
              Office
            </a>
          </iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PitchDeck;
