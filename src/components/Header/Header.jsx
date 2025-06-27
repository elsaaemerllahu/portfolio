import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { CgProfile } from "react-icons/cg";
import { BsEnvelopeHeart } from "react-icons/bs";
import { IoPersonCircleOutline, IoPersonOutline } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";
import { GoPerson } from "react-icons/go";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 700);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header-wrapper">
      <div
        className={`main-header ${isScrolled && !isHovered ? "scrolled" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="header-inner">
          <Link to="/" className="logo">Portfolio</Link>
          <nav className="nav-links">
            {isMobile ? (
              <>
                <Link to="/about" title="About"><IoPersonCircleOutline size={30} /></Link>
                <Link to="/contact" title="Contact"><BsEnvelopeHeart size={27} /></Link>
              </>
            ) : (
              <>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
