import React from "react";
import "./Overview.css";
import pHimg from "./pH_graph.png";
import { GiAcid, GiMarbles, GiAcidTube } from "react-icons/gi";
import { LuWaves } from "react-icons/lu";

function Overview() {
  // Define the path to the HTML file you want to open
  const htmlFilePath = "/pH_levels_over_time_with_anomalies.html";

  return (
    <div className="stats-container">
      <div className="Headings">
        <div className="Heading-text">
          Project Statistics
          <div className="stats_box">
            <div className="chart_box"></div>
            <a href={htmlFilePath} target="_blank" rel="noopener noreferrer">
              <img src={pHimg} alt="pH" className="phImage1" />
            </a>
            <div className="row1">
              <div className="box">
                <div className="center-content">
                  <GiAcid size={50} color= "#00008B"/>
                </div>
              </div>
              <div className="box2">
                <div className="center-content">
                  <LuWaves size={50} color= "#00008B"/>
                </div>
              </div>
            </div>
            <div className="row2">
              <div className="box3">
              <div className="center-content">
                  <GiAcidTube size={50} color= "#00008B"/>
                </div>
              </div>
              <div className="box4">
              <div className="center-content">
                  <GiMarbles size={60} color= "#00008B"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
