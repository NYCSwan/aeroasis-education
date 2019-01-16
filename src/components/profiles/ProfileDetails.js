import React from "react";
import picky from "../../assets/images/farmers_market.jpg";
import potpourri from "../../assets/images/veggies_market.jpg";
// import adventurous from ;

import "./css/ProfileDetails.css";

const ProfileDetails = props => (
  <div className="details-container">
    <img src={picky} className={`profile-${props.profile.profile.type}`} />
    <h2>{props.profile.profile.type.toUpperCase()}</h2>
    <p>{props.profile.profile.description}</p>
    <aside>
      <ul>
        {props.profile.profile.pros.map(pro => {
          return <li>{pro}</li>;
        })}
      </ul>
      <ul>
        {props.profile.profile.cons.map(con => {
          return <li>{con}</li>;
        })}
      </ul>
    </aside>
    <ul>
      {props.profile.profile.short.map(item => {
        return <li>{item}</li>;
      })}
    </ul>
  </div>
);

export default ProfileDetails;
