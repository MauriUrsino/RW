const getRandomIndex = (length) => Math.floor(Math.random() * length);

const getRandomName = () => {
  const firstNames = ["Anakin", "Obi-Wan", "Padmé", "Palpatine"];
  const lastNames = ["Skywalker", "Amidala", "Kenobi", "Maul"];

  return `${firstNames[getRandomIndex(firstNames.length)]} ${
    lastNames[getRandomIndex(lastNames.length)]
  }`;
};

export default getRandomName;
