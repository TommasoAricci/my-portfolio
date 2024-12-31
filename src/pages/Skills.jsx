import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import "../style/pages/Skills.scss";
import htmlImg from "../images/tokens/html.png";
import cssImg from "../images/tokens/css.png";
import jsImg from "../images/tokens/javascript.png";
import reactImg from "../images/tokens/react.png";
import nodeImg from "../images/tokens/nodejs.png";
import mongoImg from "../images/tokens/mongodb.png";
import adIMG from "../images/tokens/adobe.png";
import git from "../images/tokens/git.png";
import copyImg from "../images/tokens/copywriting.png";
import wpImg from "../images/tokens/wordpress.png";
import blImg from "../images/tokens/blender.png";
import btImg from "../images/tokens/boot.png";
import sassImg from "../images/tokens/sass.png";
import exImg from "../images/tokens/ex.png";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");
/*   const { isOpen } = useStore();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0); */

  // swiping
  /* 
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
  }; */

  // content per tab

  const renderTabContent = useMemo(() => {
    switch (activeTab) {
      case "frontend":
        return (
          <>
            <div className="skills-container">
              <div className="skill-badge">
                <img src={htmlImg} alt="HTML Logo" />
                <span>HTML</span>
                <div className="skill-badge">
                <img src={btImg} alt="Bootstrap Logo" />
                <span>Bootstrap</span>
              </div>
              </div>
              <div className="skill-badge">
                <img src={cssImg} alt="CSS Logo" />
                <span>CSS</span>
                <div className="skill-badge">
                <img src={sassImg} alt="Sass Logo" />
                <span>Sass</span>
              </div>
              </div>
              <div className="skill-badge">
                <img src={jsImg} alt="JavaScript Logo" />
                <span>JavaScript</span>
                <div className="skill-badge">
                <img src={reactImg} alt="React Logo" />
                <span>React</span>
              </div>
              </div>
            </div>
          </>
        );
      case "backend":
        return (
          <>
            <div className="skills-container">
              <div className="skill-badge">
                <img src={nodeImg} alt="NODE logo" />
                <span>NODEJS</span>
                <div className="skill-badge">
                  <img src={exImg} alt="Express Logo" />
                  <span>Express</span>
                </div>
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
                <img src={adIMG} alt="ADOBE logo" />
                <span>ADOBE</span>
              </div>
              <div className="skill-badge">
                <img src={blImg} alt="BLENDER logo" />
                <span>BLENDER</span>
              </div>
              <div className="skill-badge">
                <img src={copyImg} alt="COPYWRITING logo" />
                <span>SEO WRITING</span>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  }, [activeTab]);

  // rendering elements

  return (
    <>
      <Navbar />
      <>
        <div
          className="mainAbout mainSkills"
          /*             onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd} */
        >
          <div id="aboutTitle">
            <h1>Skills</h1>
          </div>
          {renderTabContent}
        </div>

        <div className="tabs-container">
          <div className="tabs">
            <button
              className={`tab-link ${activeTab === "frontend" ? "active" : ""}`}
              onClick={() => setActiveTab("frontend")}
            >
              Frontend
            </button>
            <button
              className={`tab-link ${activeTab === "backend" ? "active" : ""}`}
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
    </>
  );
}
