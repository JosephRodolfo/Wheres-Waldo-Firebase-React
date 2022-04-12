export const getCoordsOnClick = (e) => {
  const elementPosition = document
    .getElementById("picture")
    .getBoundingClientRect();
    
  const coords= [e.clientX - elementPosition.x, e.clientY - elementPosition.y];
  return coords;
};
