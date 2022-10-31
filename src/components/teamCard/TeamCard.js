import "./TeamCard.css";
import profile from "../../assets/img/Rectangle 3025.png";
import linkedin from "../../assets/img/teamCard_icons/linkedin.png";

const TeamCard = ({ data }) => {
  const { image, name, position, linkedIn, description } = data;
  return (
    <div className="team-card">
      <img
        src={image.imageUrl}
        alt="profile"
        className="team-card__profile-img"
      />
      <div className="team-card__name">{name}</div>
      <div className="team-card__title">
        {position}{" "}
        <img
          src={linkedin}
          alt="linkedin"
          className="team-card__social-icon"
          onClick={() => {
            window.open(linkedIn, "_blank");
          }}
        />
      </div>
      <br />
      <p className="team-card__description">{description}</p>
    </div>
  );
};

export default TeamCard;
