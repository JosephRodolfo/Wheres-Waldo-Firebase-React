import React from "react";
import { HeaderNav } from "../components/HeaderNav";
import underConstruction from "../assets/images/skeleton.jpg";

import { HighScoreCard } from "./HighScoreCard";

export const HighScoresPage = (props) => {

 if (props.highScoresDataTwo.length !==0){localStorage.setItem("scores", JSON.stringify(props.highScoresDataTwo))};

   JSON.parse(localStorage.getItem("scores"));
  

  return (
    <div>
      <HeaderNav />
      <h1>High Scores!</h1>

      {JSON.parse(localStorage.getItem("scores")).map((element, index) => {
        return (
          <HighScoreCard playerName={element.name} key={index} number={index} score={element.score} />
        );
      })}
    </div>
  );
};
