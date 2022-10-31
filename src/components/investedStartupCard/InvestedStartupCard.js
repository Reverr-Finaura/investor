import "./InvestedStartupCard.css";

const InvestedStartupCard = (props) => {
  return (
    <div className="invested-startup-card">
      <img src={props.image} alt="invested-startup" />
      <div className="invested-startup-card__name">{props.name}</div>
    </div>
  );
};

export default InvestedStartupCard;
