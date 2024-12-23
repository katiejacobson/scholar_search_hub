import "./Footer.css";
import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.png";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__copyright-container">
        <p className="footer__copyright-info">
          © Katie Jacobson, Powered by Core API
        </p>
      </div>
      <div className="footer__hyperlink-container">
        <a href="" target="_blank">
          <p className="footer__hyperlink-info">Home</p>
        </a>
        <a href="https://tripleten.com/" target="_blank">
          <p className="footer__hyperlink-info">TripleTen</p>
        </a>
        <a href="https://github.com/katiejacobson" target="_blank">
          <img
            className="footer__hyperlink-image"
            src={github}
            alt="github logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/katherine-jacobson-1b3940227/"
          target="_blank"
        >
          <img
            className="footer__hyperlink-image"
            src={linkedin}
            alt="linkedin logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
