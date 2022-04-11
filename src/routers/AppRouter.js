import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import { MainImage } from "../components/MainImage";
import { HighScoresPage } from "../components/HighScoresPage";
import lastSupper from '../assets/images/last_supper.jpg'
import {firebase, dbRef} from '../firebase/firebase';

const AppRouter = () => {


  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<MainImage source={lastSupper} database={dbRef}/>} />
          <Route path="/HighScoresPage" element={<HighScoresPage database={dbRef}/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
