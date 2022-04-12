import React from "react";
import { handleGuess } from "../actions/handleGuess";
import { PersonSelector } from "./PersonSelector";
import { useState, useEffect } from "react";
import { getRandomPerson, removePerson } from "../actions/peopleHandlers";
import { checkForMatch } from "../actions/checkForMatch";
import { getCoordsOnClick } from "../actions/getCoordsOnClick";
import { get, child, ref, set, push} from "firebase/database";
import { Stopwatch } from "./Stopwatch";
import { HeaderNav } from "./HeaderNav";
import { HighScoreModal } from "./HighScoreModal";
export const MainImage = (props) => {
  const [hiddenOrNot, setGuessMenu] = useState(false);
  const [selectorCoords, setCoords] = useState([0, 0]);
  const [wrongIndicator, setWrong] = useState([false]);
  const [selectedRandomPerson, setRandom] = useState({ person: "" });
  const [stopWatchStart, setStart] = useState(false);
  const [winTime, setWinTime] = useState(0);
  const [showModal, setModal] = useState(false);
  const [scoreList, setList] = useState([
    "Bartholemew",
    // "James_Minor",
    // "Andrew",
    // "Judas",
    // "Peter",
    // "John_Mary",
    "Jesus",
    // "Thomas",
    // "James_Major",
    // "Phillip",
    // "Matthew",
    // "Thaddeus",
    // "Simon",
  ]);

  const startGame = () => {
    let randomPerson = getRandomPerson(scoreList);

    setRandom({ person: randomPerson });
    setStart(true);
  };

  useEffect(() => {
    document
      .querySelector("#remaining-indicator")
      .classList.add("correct-alert");
    document.querySelector("#remaining-indicator").classList.remove("fade");

    setTimeout(() => {
      document
        .querySelector("#remaining-indicator")
        .classList.remove("correct-alert");
      document.querySelector("#remaining-indicator").classList.add("fade");
    }, 2000);
  }, [scoreList.length]);

  useEffect(() => {
    setList([
      "Bartholemew",
      // "James_Minor",
      // "Andrew",
      // "Judas",
      // "Peter",
      // "John_Mary",
      "Jesus",
      // "Thomas",
      // "James_Major",
      // "Phillip",
      // "Matthew",
      // "Thaddeus",
      // "Simon",
    ]);
  }, [hiddenOrNot]);

  const passUpTime = (time) => {
    if (time !== 0) {
      setWinTime(time);
    } else {
      setWinTime(0);
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  const submitHighScore = (data) => {
    console.log(winTime, data);




writeUserData(data, winTime);






    function writeUserData(name, score) {
      console.log(props.database)
      push(child(props.database, 'highScores/player'), {
        name: name,
        score : score
      });
    }








  }

  return (
    <div>
      {showModal && <HighScoreModal submitHighScore={submitHighScore} closeModal={closeModal} score={winTime} />}
      <HeaderNav />
      {selectedRandomPerson.person == "" ? (
        <button onClick={startGame}>Start</button>
      ) : (
        <h3>{selectedRandomPerson.person}</h3>
      )}
      <Stopwatch start={stopWatchStart} passUpTime={passUpTime} />
      <h4 id="remaining-indicator">People remaining: {scoreList.length}</h4>
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
                  if (scoreList.length == 1) {
                    setStart(false);
                    setRandom({ person: "" });
                    setGuessMenu(false);
                    setModal(true);
                    return;
                  }

                  let remainingPeople = removePerson(
                    selectedRandomPerson.person,
                    scoreList
                  );

                  setList(remainingPeople);
                  let randomPerson = getRandomPerson(remainingPeople);
                  setRandom({ person: randomPerson });
                } else {
                  setWrong(true);
                  setTimeout(() => {
                    setWrong(false);
                  }, 1000);

                  return;
                }
              })
              .catch((error) => {
                console.error(error);
              });
          }}
        />
        {hiddenOrNot && (
          <PersonSelector wrong={wrongIndicator} position={selectorCoords} />
        )}
      </div>
    </div>
  );
};
