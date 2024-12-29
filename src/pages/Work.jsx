/* import React, { useState, useRef } from "react";
 */import { useStore } from "../store";
import Navbar from "../components/Navbar";
import "../style/pages/Skills.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Skills() {
  const { isOpen } = useStore();
 /*  const [activeTab, setActiveTab] = useState("frontend");
  const touchStartX = useRef(0);
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

  /* const renderTabContent = () => {
    switch (activeTab) {
      case "frontend":
        return (
          <>
            <div id="aboutTitle">
              <h1>Skills</h1>
            </div>
            <div class="skills-container">
              <div class="skill-badge">
                <img src={htmlImg} alt="HTML Logo" />
                <span>HTML</span>
              </div>
              <div class="skill-badge">
                <img src={cssImg} alt="CSS Logo" />
                <span>CSS</span>
              </div>
              <div class="skill-badge">
                <img src={jsImg} alt="JavaScript Logo" />
                <span>JavaScript</span>
              </div>
              <div class="skill-badge">
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
            <div class="skills-container">
              <div class="skill-badge">
                <img src={nodeImg} alt="NODE logo" />
                <span>NODEJS</span>
              </div>
              <div class="skill-badge">
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
            <div class="skills-container">
              <div class="skill-badge">
                <img src={git} alt="GIT logo" />
                <span>GIT</span>
              </div>
              <div class="skill-badge">
                <img src={wpImg} alt="WORDPRESS Logo" />
                <span>WORDPRESS</span>
              </div>
              <div class="skill-badge">
                <img src={psImg} alt="PHOTOSHOP logo" />
                <span>PHOTOSHOP</span>
              </div>
              <div class="skill-badge">
                <img src={aiImg} alt="ILLUSTRATOR logo" />
                <span>ILLUSTRATOR</span>
              </div>
              <div class="skill-badge">
                <img src={blImg} alt="BLENDER logo" />
                <span>BLENDER (basic)</span>
              </div>
              <div class="skill-badge">
                <img src={copyImg} alt="COPYWRITING logo" />
                <span>COPYWRITING & SEO</span>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  }; */

  // rendering elements

  return (
    <>
      <Navbar />
      {!isOpen ? (
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
              <h4 className="vertical-timeline-element-subtitle">Remotely</h4>
              <p>Erbrand srl and Technip</p>
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
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online
                Marketing
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
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
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
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "rgba(3, 169, 244, 0.1)",
                color: "#fff",
              }}
              date="April 2013"
              iconStyle={{ background: "#03a9f4", color: "#fff" }}
              position="left" // A sinistra
            >
              <h3 className="vertical-timeline-element-title">
                Content Marketing for Web, Mobile and Social Media
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Online Course
              </h4>
              <p>Strategy, Social Media</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </>
      ) : null}
    </>
  );
}
