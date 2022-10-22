import { configureStore } from "@reduxjs/toolkit";

import airportReducer from "./airports";
import flightsReducer from "./flights";
import userReducer from "./user";

const store = configureStore({
  reducer: {
    airports: airportReducer,
    user: userReducer,
    flights: flightsReducer,
  },
});

export default store;
