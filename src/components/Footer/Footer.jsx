import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="portfolio-footer">

      <div className="footer-content">
        <p>Let's get to know each other</p>

        <div className="socials">
          <div className="social-links">
          <a href="https://github.com/elsaaemerllahu" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/elsa-em%C3%ABrllahu-73735028a/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:elsaemerllahu12@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
