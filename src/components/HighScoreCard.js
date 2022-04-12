import React from "react";

export const HighScoreCard = (props) => (
  <div className="high-score-card-container">
    <p>{props.number + 1}</p>
    <h4>{props.playerName}</h4>
    <p>{props.score} seconds</p>
  </div>
); 
