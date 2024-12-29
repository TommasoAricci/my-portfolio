import React from "react";
import "../style/navbar.scss";
import image from "../images/copia.jpg";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useStore } from "../store";

export default function Navbar() {
  const { isOpen, setIsOpen } = useStore();
  
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <>
      <div className={isOpen ? "mainMobile" : "mainClose"}>
        <img className="image" src={image} alt="" width="200px" />

        <nav>
          <Link to="/" style={linkStyle}>
            <div className="navDiv" onClick={() => setIsOpen(!isOpen)}>
              <h2>About me</h2>
            </div>
          </Link>
          <Link to="/skills" style={linkStyle}>
            <div className="navDiv" onClick={() => setIsOpen(!isOpen)}>
              <h2>Skills</h2>
            </div>
          </Link>
          <Link to="/work" style={linkStyle}>
          <div className="navDiv" onClick={() => setIsOpen(!isOpen)}>
            <h2>JOBS & Education</h2>
          </div>
          </Link>
          <div className="navDiv">
            <h2>Projects</h2>
          </div>
          <div className="navDiv">
            <h2>Contacts</h2>
          </div>
        </nav>
      </div>

      <Hamburger toggled={isOpen} toggle={setIsOpen} />
    </>
  );
}
