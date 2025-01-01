import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../style/pages/Work.scss";
import "../style/pages/About.scss";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"; */

export default function Skills() {
  const [activeTab, setActiveTab] = useState("works");
  /*  const touchStartX = useRef(0);
  const touchEndX = useRef(0); */

  // swiping

  /*   const handleSwipe = () => {
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

  const renderTabContent = () => {
    switch (activeTab) {
      case "works":
        return (
          <>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#03a9f4", color: "#fff" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #03a9f4",
                }}
                date="2024 - present"
                iconStyle={{ background: "#03a9f4", color: "#fff" }}
                position="left" // A sinistra
              >
                <h3 className="vertical-timeline-element-title">
                  Frontend Developer
                </h3>
                <p>Erbrand srl and Technip</p>
{/*                 <div className="infoIcon">
                  <FontAwesomeIcon icon={faCircleInfo} />
                </div> */}
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgba(3, 169, 244, 0.1)",
                  color: "#fff",
                }}
                date="2010 - 2011"
                iconStyle={{ background: "#03a9f4", color: "#fff" }}
                position="right" // A destra
              >
                <h3 className="vertical-timeline-element-title">
                  Art Director
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  San Francisco, CA
                </h4>
                <p>
                  Creative Direction, User Experience, Visual Design, SEO,
                  Online Marketing
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgba(3, 169, 244, 0.1)",
                  color: "#fff",
                }}
                date="2008 - 2010"
                iconStyle={{ background: "#03a9f4", color: "#fff" }}
                position="left" // A sinistra
              >
                <h3 className="vertical-timeline-element-title">
                  Web Designer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Los Angeles, CA
                </h4>
                <p>User Experience, Visual Design</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgba(3, 169, 244, 0.1)",
                  color: "#fff",
                }}
                date="2006 - 2008"
                iconStyle={{ background: "#03a9f4", color: "#fff" }}
                position="right" // A destra
              >
                <h3 className="vertical-timeline-element-title">
                  Web Designer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  San Francisco, CA
                </h4>
                <p>User Experience, Visual Design</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
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

  // rendering elements

  return (
    <>
      <Navbar />
      <>
        <div className="mainAbout mainWork">
          <div id="aboutTitle">
            <h1>About me</h1>
          </div>
          {renderTabContent()}
        </div>
        <div className="tabs-container">
          <div className="tabs">
            <button
              className={`tab-link ${activeTab === "works" ? "active" : ""}`}
              onClick={() => setActiveTab("works")}
            >
              Works
            </button>
            <button
              className={`tab-link ${
                activeTab === "education" ? "active" : ""
              }`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
          </div>
        </div>
      </>
    </>
  );
}
