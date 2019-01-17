import React from "react";
import picky from "../../assets/images/farmers_market.jpg";
import potpourri from "../../assets/images/veggies_market.jpg";
import { upperFirst } from "lodash";

import "./css/ProfileDetails.css";

const ProfileDetails = ({ profile }) => (
  <div className="details-container">
    <img src={picky} className={`profile-${profile.type}`} />
    <h2>{profile.type.toUpperCase()}</h2>
    <summary>{profile.description}</summary>
    <aside>
      <ul>
        <label className="profile-label">Pros</label>
        {profile.pros.map(pro => {
          return <li key={pro}>{upperFirst(pro)}</li>;
        })}
      </ul>
      <ul>
        <label className="profile-label">Cons</label>
        {profile.cons.map(con => {
          return <li key={con}>{upperFirst(con)}</li>;
        })}
      </ul>
      <ul>
        <label className="profile-label">Adventurous Eaters usually..</label>
        {profile.short.map(item => {
          return <li key={item}>{upperFirst(item)}</li>;
        })}
      </ul>
    </aside>
  </div>
);

export default ProfileDetails;
