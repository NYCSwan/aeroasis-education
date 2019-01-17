import React from "react";

import "./css/ProfileLinks.css";

const ProfileLinks = props => (
  <div className="profile-links-container">
    <p className="sub-header">Take a look at the other consumer profiles!</p>
    {props.profiles.map(profile => {
      return (
        <button className="btn-link" onClick={props.handleBtnClick}>
          {profile.profile.type}
        </button>
      );
    })}
    {props.energy.map(item => {
      return (
        <button
          className="btn-link"
          onClick={props.handleBtnClick}
          disabled={item.profile.type === props.currentProfile.type}
        >
          {item.profile.type}
        </button>
      );
    })}
  </div>
);

export default ProfileLinks;
