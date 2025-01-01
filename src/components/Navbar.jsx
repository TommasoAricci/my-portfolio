import React, { useEffect } from "react";
import "../style/navbar.scss";
import image from "../images/copia.jpg";
import { Link, useLocation } from "react-router-dom"; // Importa useLocation
import Hamburger from "hamburger-react";
import { useStore } from "../store";

export default function Navbar() {
  const { isOpen, setIsOpen } = useStore();
  const location = useLocation(); // Hook per rilevare il percorso attuale

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  // Chiude il menu quando cambia il percorso
  useEffect(() => {
    console.log("Percorso cambiato:", location.pathname);
    setIsOpen(false);
  }, [location.pathname, setIsOpen]);  

  return (
    <>
      <div className={isOpen ? "mainMobile" : "mainClose"}>
        <img className="image" src={image} alt="" width="200px" />

        <nav>
          <Link to="/" style={linkStyle}>
            <div className="navDiv">
              <h2>About me</h2>
            </div>
          </Link>
          <Link to="/skills" style={linkStyle}>
            <div className="navDiv">
              <h2>Skills</h2>
            </div>
          </Link>
          <Link to="/work" style={linkStyle}>
            <div className="navDiv">
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
