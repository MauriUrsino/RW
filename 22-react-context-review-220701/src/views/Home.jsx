import React, { useContext } from "react";
import ToggleTheme from "../components/ToggleTheme";
import UserCard from "../components/UserCard";
import { ThemeContext } from "../contexts/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className="home"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <section className="section">
        <h1>React Context API</h1>
        <p>
          Para más información, consultá la documentación oficial:{" "}
          <a target="_blank" href=" https://reactjs.org/docs/context.html">
            Context API
          </a>
        </p>
      </section>

      <section className="section space_block">
        <ToggleTheme />
        <h3>Desde acá podés cambiar el tema de la app!</h3>
      </section>

      <section className="section space_block">
        <h1>Información del usuario</h1>
        <UserCard />
      </section>
    </main>
  );
};

export default Home;
