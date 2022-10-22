import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import unknown from "../assets/unknown.svg";
import user_logged from "../assets/user.svg";

const UserCard = () => {
  const { isAuthenticated, user } = useContext(AuthContext);

  return (
    <div className="user_card">
      <h1>{isAuthenticated ? `${user.fullName}` : "Usuario Desconocido"}</h1>
      <img src={isAuthenticated ? user_logged : unknown} alt="user_profile" />
    </div>
  );
};

export default UserCard;
