import { onValue, ref } from "firebase/database";

export const checkForMatch = (x, positionValue) => {
  console.log(x, positionValue)

    if (positionValue[0] < x && x < positionValue[1]) {
      return true;
    } else {
      return false;
    }
  
};


