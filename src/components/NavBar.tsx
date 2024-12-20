import { Link, useNavigate } from "react-router-dom";
import logoTitle from "../assets/logo-title.png";
import logoMain from "../assets/logo.png";
import "../css/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [logo, setLogo] = useState<string>(logoTitle);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      setIsVisible(scrollHeight > 100);
    };

    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setLogo(windowWidth <= 375 ? logoMain : logoTitle);
    };

    // Initial logo check
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`NavBar${isVisible ? " visible" : ""}`}>
      <div
        className="logoContainer"
        style={logo === logoMain ? { width: 70, margin: ".7rem 0" } : {}}
      >
        <img src={logo} alt="Logo" />
      </div>
      <ul className={`links${navOpen ? " nav-open" : ""}`}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/properties"}>Properties</Link>
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link to={"/contact-us"}>Contact Us</Link>
        </li>
        <li>
          <Link to={"/shop-services"}>Services</Link>
        </li>
      </ul>
      <div className="auth">
        <button onClick={() => navigate("/register")}>Register</button>
        <div className="hamMenu" onClick={() => setNavOpen((prev) => !prev)}>
          <FontAwesomeIcon
            icon={faBars}
            fontSize={20}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
