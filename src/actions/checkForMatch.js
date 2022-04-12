
export const checkForMatch = (x, positionValue) => {
    if (positionValue[0] < x && x < positionValue[1]) {
      return true;
    } else {
      return false;
    }
  
};


