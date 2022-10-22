import { createAction, createReducer } from "@reduxjs/toolkit";

import FakeData from "../utils/fake-data";

export const setFlights = createAction("SET_FLIGHTS");

const initialState = FakeData.getFlights();

export default createReducer(initialState, {
  [setFlights]: (state, action) => {
    if (!action.payload.origin || !action.payload.destination)
      return FakeData.getFlights();

    return state.filter(
      (flight) =>
        flight.origin.name === action.payload.origin &&
        flight.destination.name === action.payload.destination
    );
  },
});
