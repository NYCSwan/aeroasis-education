import React from "react";
import "./css/EnergyProfile.css";

const EnergyProfile = ({ profile }) => (
  <div className="energy-profile">
    <h2>{profile.type.toUpperCase()}</h2>
    <div className="energy-scores">
      <p className="energy-text">{profile.min}</p>
      <p className="energy-text">{profile.max}</p>
    </div>
    <summary className="energy-summary">{profile.description}</summary>
  </div>
);

export default EnergyProfile;
