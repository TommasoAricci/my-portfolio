import React from "react";

export default function Tabs({ activeTab, setActiveTab, first, second, third }) {

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button
          className={`tab-link ${activeTab === first ? "active" : ""}`}
          onClick={() => setActiveTab(first)}
        >
          {first.toUpperCase()}
        </button>
        <button
          className={`tab-link ${activeTab === second ? "active" : ""}`}
          onClick={() => setActiveTab(second)}
        >
            {second.toUpperCase()}
        </button>
        {third && (
          <button
            className={`tab-link ${activeTab === third ? "active" : ""}`}
            onClick={() => setActiveTab(third)}
          >
              {third.toUpperCase()}
          </button>
        )}

      </div>
    </div>
  );
}
