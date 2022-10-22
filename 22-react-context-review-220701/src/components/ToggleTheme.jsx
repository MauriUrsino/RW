import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ToggleTheme = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="toggleBtn" onClick={() => toggleTheme()}>
      {mode === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ToggleTheme;
