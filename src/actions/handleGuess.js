import { getCoordsOnClick } from "./getCoordsOnClick";

export const handleGuess = (e) => {
  let coordsObj = getCoordsOnClick(e);
  return coordsObj;
};
