import React from 'react';
import { handleGuess } from '../actions/handleGuess';
import { PersonSelector } from './PersonSelector';
import { useState } from 'react';
export const MainImage = (props) =>{


    const [hiddenOrNot, setGuessMenu] = useState(false);
    const [selectorCoords, setCoords] = useState([0, 0]);



return (
    <div className="main-image-container">
        <h2>The Last Supper</h2>
        <img src={props.source} alt="the last supper" onClick={(e)=>{
            
            handleGuess(e, setGuessMenu(!hiddenOrNot));
}}/>
      {hiddenOrNot &&  <PersonSelector position={selectorCoords}/>}

        
    </div>




)}


