import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../style/pages/About.scss";
import "../style/Tabs.scss";
import Tabs from "../components/Tabs";
import Project from "../components/Project";
import greenway from "../images/projects/greenway.png";
import bookfinder from "../images/projects/bookfinder.png";
import cafequiz from "../images/projects/cafequiz.png";
import counter from "../images/projects/counter.png";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("about");

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection : "column",
    gap : "20px",
    marginTop: "50px",
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <>
            <div className="projects-list" style={style}>
              <Project src={greenway} title="Greenway" link="https://veg-recipes-founder.netlify.app/" git="https://github.com/TommasoAricci/veg-recipes-founder"/>
              <Project src={bookfinder} title="Bookfinder" link="https://tommasoaricci-bookfinder.netlify.app/" git="https://github.com/TommasoAricci/theBookFinder"/>
              <Project src={cafequiz} title="Cafequiz" link="https://tommasoaricci.github.io/quiz-app/" git="https://github.com/TommasoAricci/quiz-app"/>
              <Project src={counter} title="Counter" link="https://tommasoaricci.github.io/javascript-counter/" git="https://github.com/TommasoAricci/javascript-counter"/>
            </div>
          </>
        );
      case "info":
        return (
          <>
            <div className="aboutDescription">
              <h2>Info</h2>
              <p>Descrizione del tab "about".</p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <>
        <div className="mainAbout">
          <div id="aboutTitle">
            <h1>Projects</h1>
          </div>
          {renderTabContent()}
        </div>

      </>
    </>
  );
}
