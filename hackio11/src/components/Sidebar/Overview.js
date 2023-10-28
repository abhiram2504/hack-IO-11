import React from "react";
import "./Overview.css";
import pHimg from "./pH_graph.png";

function Overview() {
  return (
    <div className="stats-container">
      <div className="Headings">
        <div className="Heading-text">
          Project Statistics
          <div className="stats_box">
            <div className="chart_box"></div>
            <img src={pHimg} alt="pH" className="phImage1"/>

            <div className="row1">
              <div className="box"></div>
              <div className="box"></div>
            </div>
            <div className="row2">
              <div className="box"></div>
              <div className="box"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
