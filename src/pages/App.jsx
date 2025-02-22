import React from "react";
import "../style/App.scss";
import Navbar from "../components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="mainAbout mainApp">
        <h1 id="app-h1">
          Welcome to my <br /><span> web developer portfolio</span>
        </h1>
      </div>
      <div className="aboutDescription appDescription"></div>
    </>
  );
}
