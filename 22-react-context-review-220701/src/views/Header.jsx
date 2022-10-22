import { useContext } from "react";
import getFakeUser from "../api/auth";

import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
  const { isAuthenticated, toggleAuth, user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  const loginUser = (e) => {
    e.preventDefault();

    // logueamos a un usuario generado desde la fake-api
    const user = getFakeUser();
    toggleAuth(user);
  };

  const logoutUser = (e) => {
    e.preventDefault();

    //deslogueamos al usuario generado
    toggleAuth(null);
  };

  return (
    <nav
      className="header"
      style={{ background: theme.ui, color: theme.syntax }}
    >
      <div>
        {isAuthenticated
          ? `Bienvenido ${user.fullName}!`
          : "Te encontrás deslogueado!"}
      </div>

      <button
        style={{ color: theme.syntax }}
        onClick={(e) => (!isAuthenticated ? loginUser(e) : logoutUser(e))}
      >
        {isAuthenticated ? "Cerrar Sesión" : "Ingresar"}
      </button>
    </nav>
  );
};

export default Header;
