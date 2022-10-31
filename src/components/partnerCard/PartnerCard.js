import "./PartnerCard.css";
// import partnerCardImage from "../../assets/img/partner_card-image.png";

const PartnerCard = ({ data }) => {
  const { logo, bgImage } = data.cardImages;
  const { dealDescription } = data;
  const { dealDetails } = data;
  const getRemainingDays = () => {
    let remainingDays = 31 - dealDetails.date.substring(8, dealDetails.length);
    return remainingDays;
  };
  return (
    <>
      <div className="partner-card__wrap">
        {/* <div className="partner-card__background"> */}
        <div className="partner-card__main">
          {/* <div className="partner-card__main-top"> */}
          <img
            style={{
              width: "115%",
              height: "150px",
              transform: "translate(-1.12rem,-1.2rem)",
              border: "1px solid black",
            }}
            src={bgImage.bgUrl}
            alt="background"
          />
          <div className="partner-card__main-content">
            <div style={{ width: "70%" }}>
              <div style={{ fontSize: "20px", fontWeight: "600" }}>
                {dealDetails.name}
              </div>
              <div style={{ fontSize: "14px" }}>
                {dealDescription.shortDesc}
              </div>
            </div>
            <img
              src={logo.logoUrl}
              alt="partner"
              style={{
                width: "35%",
                height: "35%",
                transform: "translateY(-6rem)",
                borderRadius: "50%",
                border: "1px solid black",
              }}
            />
          </div>

          <br />
          <hr style={{ width: "40%", border: "1px solid #0077B7" }} />
          <br />
          <div className="partner-card__achievements">
            <div className="partner-card__achievement">
              Raised
              <br />
              <span style={{ color: "#0077B7" }}>{dealDetails.raised}</span>
            </div>
            <hr
              style={{
                height: "35px",
                border: "1px solid #0077B7",
              }}
            />
            <div className="partner-card__achievement">
              Closes in
              <br />
              <span style={{ color: "#0077B7" }}>
                {getRemainingDays()} Days
              </span>
            </div>
            <hr
              style={{
                height: "35px",
                border: "1px solid #0077B7",
              }}
            />
            <div className="partner-card__achievement">
              Investors
              <br />
              <span style={{ color: "#0077B7" }}>{data.investors.length}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerCard;
