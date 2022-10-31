import "./LandingInvestorBottom.css";
import scissor from "../../assets/img/investor_landing_bottom/scissor.png";
import bnw from "../../assets/img/investor_landing_bottom/bnw.png";
import devaux from "../../assets/img/investor_landing_bottom/devaux.png";
import blvck from "../../assets/img/investor_landing_bottom/blvck.png";
import sector from "../../assets/img/investor_landing_bottom/sector.png";

const LandingInvestorBottom = () => {
  return (
    <div className="landing-investor__bottom">
      <div className="landing-investor__left">
        <div className="landing-investor__left-heading">
          We are here to revolutionize your Start-ups
        </div>
        <br />
        <p className="landing-investor__left-para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="landing-investor__right">
        <div className="landing-investor__right-heading">
          We are Sector Agnostic
        </div>
        <div className="landing-investor__right-img">
          <img src={scissor} alt="scissor" className="investor__right-img" />
          <img src={sector} alt="sector" className="investor__right-img" />
          <img src={bnw} alt="bnw" className="investor__right-img" />
          <img src={devaux} alt="devaux" className="investor__right-img" />
          <img src={blvck} alt="blvck" className="investor__right-img" />
          <img src={scissor} alt="scissor" className="investor__right-img" />
        </div>
      </div>
    </div>
  );
};

export default LandingInvestorBottom;
