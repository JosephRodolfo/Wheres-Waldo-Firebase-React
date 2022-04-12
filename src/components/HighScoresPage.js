import React from "react";
import { HeaderNav } from "../components/HeaderNav";
import underConstruction from "../assets/images/skeleton.jpg";

export const HighScoresPage = (props) => (
  <div>
    <HeaderNav />
    <h1>High Scores!</h1>
    <img src={underConstruction} alt="under construction skeleton"></img>
  </div>
);
