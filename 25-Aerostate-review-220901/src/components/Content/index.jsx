import * as React from "react";

import Grid from "./Grid";
import Filters from "./Filters";
import Sidebar from "../Sidebar";

import { FaSearch } from "react-icons/fa";

import s from "./style.module.scss";

export default function Content() {
  return (
    <main>
      <section className={s.content}>
        <div className={s.title}>
          <FaSearch />
          <h2>Search between like 10 different places or so!</h2>
        </div>

        <Filters />

        <Grid />
      </section>
      <Sidebar />
    </main>
  );
}
