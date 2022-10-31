import LoggedInNavbar from "../../../components/loggedInNavbar/LoggedInNavbar";
import DealSideNav from "../../../components/dealsidenav/DealSideNav";
import "./faq.css";
import Accordian from "../../../components/accordian/Accordian";
import Footer from "../../../components/footer/Footer";
import { useSelector } from "react-redux";
const Faq = () => {
  const deal = useSelector((state) => state.deal.deal);
  const { faqs } = deal;

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
      <div className="faqs">
        <div className="faqs__side-nav">
          <DealSideNav />
        </div>
        <div className="faqs__right-wrap">
          <h1 style={{ color: "#2a72de", textAlign: "center" }}>
            About company
          </h1>
          {faqs.map((data) => (
            <Accordian key={data.id} {...data} />
          ))}

          <h1 style={{ color: "#2a72de", textAlign: "center" }}>
            About Reverr Venture Partners
          </h1>
          {faqReverr.map((data) => (
            <Accordian key={data.id} {...data} />
          ))}

          <div className="faqs__contact-wrap">
            <p style={{ marginBottom: "1rem" }}>
              Didn’t get what you’re looking for ? <br /> Write your query and
              we would answer as soon as possible
            </p>
            <input className="faqs__contact-input" placeholder="Type here..." />
            <button className="faqs__contact-btn">SEND</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
