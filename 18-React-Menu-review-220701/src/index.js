import React from "react";
import { render } from "react-dom";

import App from "./App";

const app = <App />;

const target = document.getElementById("root");

render(app, target);
