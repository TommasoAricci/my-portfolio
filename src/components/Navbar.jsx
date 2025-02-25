import React, { useEffect } from "react";
import "../style/navbar.scss";
import image from "../images/copia.jpg";
import { Link, useLocation } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import { useStore } from "../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const { isOpen, setIsOpen, language, setLanguage } = useStore();
  const location = useLocation();

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, setIsOpen]);

  return (
    <>
      <div className={isOpen ? "mainMobile" : "mainClose"}>
        <img className="image" src={image} alt="" width="200px" />
        <nav>
          <Link to="/about" style={linkStyle}>
            <div
              className={
                location.pathname === "/about" ? "navDiv" : "navDiv"
              }
            >
              <h2>{language === "IT" ? "Chi sono" : "About me"}</h2>
            </div>
          </Link>
          <Link to="/skills" style={linkStyle}>
            <div
              className={
                location.pathname === "/skills" ? "navDiv" : "navDiv"
              }
            >
              <h2>{language === "IT" ? "Abilità" : "Skills"}</h2>
            </div>
          </Link>
          <Link to="/work" style={linkStyle}>
            <div
              className={
                location.pathname === "/work" ? "navDiv" : "navDiv"
              }
            >
              <h2>{language === "IT" ? "Esperienza" : "Experience"}</h2>
            </div>
          </Link>
          <Link to="/projects" style={linkStyle}>
            <div
              className={
                location.pathname === "/projects" ? "navDiv" : "navDiv"
              }
            >
              <h2>{language === "IT" ? "Progetti" : "Projects"}</h2>
            </div>
          </Link>
          <div className="navDiv">
            <h2>{language === "IT" ? "Contatti" : "Contacts"}</h2>
          </div>
        </nav>
      </div>

      <Hamburger toggled={isOpen} toggle={setIsOpen} />
      {isOpen && (
        <button
          onClick={() => setLanguage(language === "IT" ? "EN" : "IT")}
          className="translator"
        >
          <FontAwesomeIcon icon={faGlobe} /> {language}
        </button>
      )}
    </>
  );
}
