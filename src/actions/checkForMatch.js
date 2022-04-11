import { onValue, ref } from "firebase/database";

export const checkForMatch = (x, positionValue) => {
  console.log(x, positionValue)

    if (positionValue[0] < x && x < positionValue[1]) {
      console.log("true")
      return true;
    } else {
      console.log('false')
      return false;
    }
  
};


