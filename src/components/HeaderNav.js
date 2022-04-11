import React from "react";
import { NavLink } from "react-router-dom";

export const HeaderNav = (props) => (
  <header className="header">
    <nav>
      <ul>
        <li>
          <NavLink
            to="/
          "
          >
            Game
          </NavLink>
        </li>
        <li>
          <NavLink to="/HighScoresPage">High Scores!</NavLink>
        </li>
      </ul>
    </nav>
    <h1>Where's Waldo: Last Supper Edition!</h1>
    <h2>Find All 13 People!</h2>
  </header>
);
