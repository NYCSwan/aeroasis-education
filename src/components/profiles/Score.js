import React from "react";

import "./css/Score.css";

const Score = props => (
  <div className="score-container">
    <h2 className="score-header">Your scores!</h2>
    <div className="scores">
      {props.scores.map(score => {
        return (
          <h3 key={score.type}>
            {score.type.toUpperCase()}: {score.score}
          </h3>
        );
      })}
    </div>
  </div>
);

export default Score;
