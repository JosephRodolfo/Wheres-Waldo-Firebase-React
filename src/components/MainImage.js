import React from 'react';
import { handleGuess } from '../actions/handleGuess';
import { PersonSelector } from './PersonSelector';
import { useState, useEffect } from 'react';
export const MainImage = (props) =>{


    const [hiddenOrNot, setGuessMenu] = useState(false);
    const [selectorCoords, setCoords] = useState([0, 0]);


  




return (
    <div className="main-image-container">
        <img src={props.source} alt="the last supper" onClick={(e)=>{
            
            setGuessMenu(true);

            setCoords([handleGuess(e)[0], handleGuess(e)[1]])
}}/>
      {hiddenOrNot &&  <PersonSelector position={selectorCoords}/>}

        
    </div>




)}


