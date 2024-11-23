import { Link, useNavigate } from "react-router-dom";
import logoTitle from "../assets/logo-title.jpg";
import "../css/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      setIsVisible(scrollHeight > 100); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`NavBar${isVisible ? '  visible' : ''}`}>
      <div className="logoContainer">
        <img src={logoTitle} />
      </div>
      <ul className={`links${navOpen ? " nav-open" : ""}`}>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/properties"}>Properties</Link></li>
        <li><Link to={"/blog"}>Blog</Link></li>
        <li><Link to={"/contact-us"}>Contact Us</Link></li>
        <li><Link to={"/shop-services"}>Services</Link></li>
      </ul>
      <div className="auth">
        <button onClick={() => navigate("/register")}>Register</button>
        <div
          className="hamMenu"
          onClick={() => setNavOpen(prev => !prev)}
        >
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
