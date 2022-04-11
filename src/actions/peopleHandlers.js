export const removePerson = (personToRemove, array) => {
  return array.filter((guess) => guess !== personToRemove);
};

export const getRandomPerson = (array) => {
  return array[Math.floor(Math.random() * 12)];
};
