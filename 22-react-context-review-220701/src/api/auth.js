import getRandomName from "../utils/getRandomName";

const getFakeUser = () => {
  // construimos un fake-user

  return {
    id: Math.floor((Math.random() + 1) * 10),
    fullName: getRandomName(),
  };
};

export default getFakeUser;
