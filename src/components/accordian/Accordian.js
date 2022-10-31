import { useState } from "react";
import "./accordian.css";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";

const Accordian = ({ Q, A }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div
        className="faqs-contentQ"
        onClick={() => setIsVisible((prevState) => !prevState)}
      >
        <h2 style={{ margin: 0, cursor: "pointer" }}>{Q}</h2>
        <h2>{isVisible ? <ChevronUp /> : <ChevronDown />}</h2>
      </div>
      <div className="faqs-contetnA">{isVisible ? <p>{A}</p> : null}</div>
      {/* </section> */}
    </>
  );
};

export default Accordian;
