import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import { MainImage } from "../components/MainImage";
import { HighScoresPage } from "../components/HighScoresPage";
import lastSupper from '../assets/images/last_supper.jpg'
import {firebase, dbRef, db} from '../firebase/firebase';
import { getHighScores } from "../actions/getHighScores";

let highScores = getHighScores(db);
// console.log(highScores.length);
// if (highScores.length !==0){localStorage.setItem("scores", JSON.stringify(highScores));
// }




const AppRouter = () => {


  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<MainImage source={lastSupper} highScores={highScores} database={dbRef}/>} />
          <Route path="/HighScoresPage" element={<HighScoresPage highScoresDataTwo={highScores} database={db}/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
