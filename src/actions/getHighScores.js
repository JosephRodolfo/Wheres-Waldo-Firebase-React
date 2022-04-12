import {
  get,
  child,
  ref,
  set,
  push,
  on,
  onChildAdded,
} from "firebase/database";

export const getHighScores = (database) => {
  let highScoresArr = [];

  const commentsRef = ref(database, "highScores/player");
  onChildAdded(commentsRef, (data) => {
    highScoresArr.push(data.val());
    highScoresArr.sort((element, elementPrev) => {
      return element.score > elementPrev.score;
    });
  });
  return highScoresArr;
};
