import React from "react";
import { useState } from "react";
export const HighScoreModal = (props) => {
  const [name, setName] = useState({ name: "" });

  return (
    <div className="high-score-modal-container">
      <h4>You got a high score!</h4>
      <p>Your time was seconds {props.score}. Please enter your name.</p>
      <label>Name: </label>
      <input
        value={name.name}
        onChange={(e) => setName({ name: e.target.value })}
      />

      <button
        type="submit"
        onClick={(e) => {
          props.submitHighScore(name.name);
          props.closeModal();
        }}
      >
        Submit
      </button>
      <button onClick={props.closeModal}>Close</button>
    </div>
  );
};
