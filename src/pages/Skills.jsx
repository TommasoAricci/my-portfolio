import React, { useState, useRef } from "react";
import { useStore } from "../store";
import Navbar from "../components/Navbar";
import "../style/pages/Skills.scss";
import htmlImg from "../images/tokens/html.png";
import cssImg from "../images/tokens/css.png";
import jsImg from "../images/tokens/javascript.png";
import reactImg from "../images/tokens/react.png";
import nodeImg from "../images/tokens/nodejs.png";
import mongoImg from "../images/tokens/mongodb.png";
import psImg from "../images/tokens/ps.png";
import aiImg from "../images/tokens/ai.png";
import git from "../images/tokens/git.png";
import copyImg from "../images/tokens/copywriting.png";
import wpImg from "../images/tokens/wordpress.png";
import blImg from "../images/tokens/blender.png";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");
  const { isOpen } = useStore();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // swiping

  const handleSwipe = () => {
    const tabs = ["frontend", "backend", "extra"];
    const currentIndex = tabs.indexOf(activeTab);

    // Swipe a sinistra

    if (touchStartX.current - touchEndX.current > 50) {
      if (currentIndex < tabs.length - 1) {
        setActiveTab(tabs[currentIndex + 1]);
      }
      // Swipe a destra
    } else if (touchEndX.current - touchStartX.current > 50) {
      if (currentIndex > 0) {
        setActiveTab(tabs[currentIndex - 1]);
      }
    }
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  // content per tab

  const renderTabContent = () => {
    switch (activeTab) {
      case "frontend":
        return (
          <>
            <div id="aboutTitle">
              <h1>Skills</h1>
            </div>
            <div className="skills-container">
              <div className="skill-badge">
                <img src={htmlImg} alt="HTML Logo" />
                <span>HTML</span>
              </div>
              <div className="skill-badge">
                <img src={cssImg} alt="CSS Logo" />
                <span>CSS</span>
              </div>
              <div className="skill-badge">
                <img src={jsImg} alt="JavaScript Logo" />
                <span>JavaScript</span>
              </div>
              <div className="skill-badge">
                <img src={reactImg} alt="React Logo" />
                <span>React</span>
              </div>
            </div>
          </>
        );
      case "backend":
        return (
          <>
            <div id="aboutTitle">
              <h1>Skills</h1>
            </div>
            <div className="skills-container">
              <div className="skill-badge">
                <img src={nodeImg} alt="NODE logo" />
                <span>NODEJS</span>
              </div>
              <div className="skill-badge">
                <img src={mongoImg} alt="MONGO logo" />
                <span>MONGO DB</span>
              </div>
            </div>
          </>
        );
      case "extra":
        return (
          <>
            <div id="aboutTitle">
              <h1>Skills</h1>
            </div>
            <div className="skills-container">
              <div className="skill-badge">
                <img src={git} alt="GIT logo" />
                <span>GIT</span>
              </div>
              <div className="skill-badge">
                <img src={wpImg} alt="WORDPRESS Logo" />
                <span>WORDPRESS</span>
              </div>
              <div className="skill-badge">
                <img src={psImg} alt="PHOTOSHOP logo" />
                <span>PHOTOSHOP</span>
              </div>
              <div className="skill-badge">
                <img src={aiImg} alt="ILLUSTRATOR logo" />
                <span>ILLUSTRATOR</span>
              </div>
              <div className="skill-badge">
                <img src={blImg} alt="BLENDER logo" />
                <span>BLENDER (basic)</span>
              </div>
              <div className="skill-badge">
                <img src={copyImg} alt="COPYWRITING logo" />
                <span>COPYWRITING & SEO</span>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  // rendering elements

  return (
    <>
      <Navbar />
      {!isOpen ? (
        <>
          <div
            className="mainAbout mainSkills"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {renderTabContent()}
          </div>

          <div className="tabs-container">
            <div className="tabs">
              <button
                className={`tab-link ${
                  activeTab === "frontend" ? "active" : ""
                }`}
                onClick={() => setActiveTab("frontend")}
              >
                Frontend
              </button>
              <button
                className={`tab-link ${
                  activeTab === "backend" ? "active" : ""
                }`}
                onClick={() => setActiveTab("backend")}
              >
                Backend
              </button>
              <button
                className={`tab-link ${activeTab === "extra" ? "active" : ""}`}
                onClick={() => setActiveTab("extra")}
              >
                Extra
              </button>
            </div>
          </div>
        </>
      ): null}
    </>
  );
}
