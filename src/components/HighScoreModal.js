import React from "react";
export const HighScoreModal = (props) => {


return (
  <div className="high-score-modal-container">
    <h4>You got a high score!</h4>
    <p>Your time was seconds {props.score}. Please enter your name.</p>
<label>Name: </label>
    <input />

    <button>Submit</button>
  </div>
)}
