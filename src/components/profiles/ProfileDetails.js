import React from "react";

const ProfileDetails = props => (
  <div className="details-container">
    {props.profile.map(details => {
      return <text>{details.description}</text>;
    })}
  </div>
);

export default ProfileDetails;
