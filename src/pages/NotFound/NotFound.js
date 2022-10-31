import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./NotFound.css";
import notFound from "../../assets/vectors/notFound.svg";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="not-found__main">
        <img alt="404" src={notFound} width="70%" />
        <div style={{ transform: "translateY(-5rem" }}>
          <div className="not-found__404">Page not found</div>
          <i>
            We are sorry, it's look like the page you are looking for isn't on
            our server.
          </i>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
