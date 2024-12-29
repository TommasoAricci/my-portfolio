import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import "../style/pages/About.scss";
import "../style/Tabs.scss";
import { useStore } from "../store";

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("about");
  const { isOpen } = useStore();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // swiping

  const handleSwipe = () => {
    const tabs = ["about", "info", "contacts"];
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
      case "about":
        return (
          <>
            <div id="aboutTitle">
              <h1>About me</h1>
            </div>
            <div className="aboutDescription">
              <h2>Chi sono?</h2>
              <p>
                Penso a me stesso come una persona razionale e determinata che
                cerca di dare sempre il meglio in ciò che fa, analizzando ogni
                singolo dettaglio affinché il risultato sia ottimale. Allo
                stesso tempo, però, sono un grande sognatore e creativo. Mi
                piace immaginare nuove realtà e sono sempre aperto ai
                cambiamenti. Amo imparare sempre cose nuove, darmi da fare e
                vivere in un ambiente stimolante. Tendo inoltre ad essere una
                fonte di supporto e aiuto per gli altri.
              </p>
            </div>
          </>
        );
      case "info":
        return (
          <>
            <div id="aboutTitle">
              <h1>About me</h1>
            </div>
            <div className="aboutDescription">
              <h2>Info</h2>
              <p>Descrizione del tab "about".</p>
            </div>
          </>
        );
      case "contacts":
        return (
          <>
            <div id="aboutTitle">
              <h1>About me</h1>
            </div>
            <div className="aboutDescription">
              <h2>Contacts</h2>
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
      {!isOpen ? (
        <>
          <div
            className="mainAbout"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {renderTabContent()}
          </div>
          <div className="tabs-container">
            <div className="tabs">
              <button
                className={`tab-link ${activeTab === "about" ? "active" : ""}`}
                onClick={() => setActiveTab("about")}
              >
                About
              </button>
              <button
                className={`tab-link ${activeTab === "info" ? "active" : ""}`}
                onClick={() => setActiveTab("info")}
              >
                Info
              </button>
              <button
                className={`tab-link ${
                  activeTab === "contacts" ? "active" : ""
                }`}
                onClick={() => setActiveTab("contacts")}
              >
                Contacts
              </button>
            </div>
          </div>
        </>
      ): null}
    </>
  );
}
