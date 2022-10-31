import "./Footer.css";
import logo from "../../assets/vectors/logo.svg";
import instagram from "../../assets/img/instagram.png";
import facebook from "../../assets/img/facebook.png";
import linkedin from "../../assets/img/linkedin.png";
import twitter from "../../assets/img/twitter.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <img src={logo} alt="logo" />
        <p className="footer-text">
          A highly scalable, fast and secure blockchain platform for distributed
          apps, enterprise use cases and the new internet economy.
          <br />
          <br />
          info@yoursite.com
        </p>
      </div>
      <div className="footer-right">
        <div className="footer-links">
          <div style={{ fontWeight: "600", cursor: "default" }}>
            Quick Links
          </div>
          <div className="footer__link">About</div>
          <div className="footer__link">Technology</div>
          <div className="footer__link">Contact</div>
          <div className="footer__link">Blog</div>
        </div>
        <div className="footer-links">
          <div style={{ fontWeight: "600", cursor: "default" }}>Template</div>
          <div className="footer__link">Licensing</div>
          <div className="footer__link">Style Guide</div>
          <div className="footer__link">Changelog</div>
        </div>
        <div className="footer-social">
          <div style={{ fontWeight: "600", cursor: "default" }}>Social</div>
          <div className="footer__social-links">
            <a
              href="https://www.instagram.com/reverrapp/?hl=en"
              rel="noreferrer"
              target="_blank"
            >
              <div className="footer__social-link">
                <img src={instagram} alt="instagram" />
              </div>
            </a>
            <a href="/" rel="noreferrer">
              <div className="footer__social-link">
                <img src={facebook} alt="facebook" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/reverr/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="footer__social-link">
                <img src={linkedin} alt="linkedin" />
              </div>
            </a>
            <a href="/" rel="noreferrer">
              <div className="footer__social-link">
                <img src={twitter} alt="twitter" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
