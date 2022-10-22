import Home from "./Home";
import Header from "./Header";

import AuthContextProvider from "../contexts/AuthContext";
import ThemeContextProvider from "../contexts/ThemeContext";

const App = () => {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Header />
        <Home />
      </AuthContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
