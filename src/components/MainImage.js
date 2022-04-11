import React from "react";
import { handleGuess } from "../actions/handleGuess";
import { PersonSelector } from "./PersonSelector";
import { useState, useEffect } from "react";
import { getRandomPerson, removePerson } from "../actions/peopleHandlers";
import { checkForMatch } from "../actions/checkForMatch";
import { getCoordsOnClick } from "../actions/getCoordsOnClick";
import { get, child, ref } from "firebase/database";

export const MainImage = (props) => {
  const [hiddenOrNot, setGuessMenu] = useState(false);
  const [selectorCoords, setCoords] = useState([0, 0]);
  const [listOfPeople, setPeople] = useState([
    "Bartholemew",
    "James_Minor",
    "Andrew",
    "Judas",
    "Peter",
    "John_Mary",
    "Jesus",
    "Thomas",
    "James_Major",
    "Phillip",
    "Matthew",
    "Thaddeus",
    "Simon",
  ]);

  const [selectedRandomPerson, setRandom] = useState({ person: "" });

  const [scoreList, setList] = useState([
    "Bartholemew",
    "James_Minor",
    "Andrew",
    "Judas",
    "Peter",
    "John_Mary",
    "Jesus",
    "Thomas",
    "James_Major",
    "Phillip",
    "Matthew",
    "Thaddeus",
    "Simon",
  ]);

  const startGame = () => {
    let randomPerson = getRandomPerson(scoreList);

    setRandom({ person: randomPerson });
  };

  return (
    <div>
      {selectedRandomPerson.person === "" ? (
        <button onClick={startGame}>Start</button>
      ) : (
        <h3>{selectedRandomPerson.person}</h3>
      )}

      <div className="main-image-container">
        <img
          id="picture"
          src={props.source}
          alt="the last supper"
          onClick={(e) => {
            setGuessMenu(true);

            setCoords([getCoordsOnClick(e)[0], getCoordsOnClick(e)[1]]);

            get(child(props.database, `people/${selectedRandomPerson.person}`))
              .then((snapshot) => {
                return snapshot.val();
              })
              .then((snapshot) => {
                if (checkForMatch(getCoordsOnClick(e)[0], snapshot)) {
                  alert("correct!");
                  let remainingPeople = removePerson(
                    selectedRandomPerson.person,
                    scoreList
                  );

                  setList(remainingPeople);
                  let randomPerson = getRandomPerson(remainingPeople);
                  console.log(randomPerson, remainingPeople.length )
                  setRandom({ person: randomPerson });
                } else {
                  alert("incorrect!");
                  return;
                }
              }).catch((error) => {
                console.error(error);
              });

    
          }}
        />
        {hiddenOrNot && <PersonSelector position={selectorCoords} />}
      </div>
    </div>
  );
};

/*
produce random name
player clicks
if match
    remove random name from array
        produce random name
            repeat
 else 
  player clicks




*/
