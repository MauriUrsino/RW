import React from "react";

import Header from "./components/Header";
import List from "./components/List";

import menu from "./menu.json";

const App = function () {
  const { drinks, food } = menu;
  return (
    <div>
      <Header />
      <main>
        <h3>Drinks</h3>
        <ul>
          <List list={drinks} />
        </ul>
        <h3>Food</h3>
        <ul>
          <List list={food} />
        </ul>
      </main>
    </div>
  );
};

export default App;
