import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../style/pages/About.scss";
import "../style/Tabs.scss";

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("about");
  
  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <>
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
            <div className="aboutDescription">
              <h2>Info</h2>
              <p>Descrizione del tab "about".</p>
            </div>
          </>
        );
      case "contacts":
        return (
          <>
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

  return (
    <>
      <Navbar />
      <>
        <div
          className="mainAbout"
        >
          <div id="aboutTitle">
            <h1>About me</h1>
          </div>
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
              className={`tab-link ${activeTab === "contacts" ? "active" : ""}`}
              onClick={() => setActiveTab("contacts")}
            >
              Contacts
            </button>
          </div>
        </div>
      </>
    </>
  );
}
