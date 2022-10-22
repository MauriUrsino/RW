import { createAction, createReducer } from "@reduxjs/toolkit";

import FakeData from "../utils/fake-data";

export const setAirports = createAction("SET_AIRPORTS");

const initialState = FakeData.getAirports();

export default createReducer(initialState, {
  [setAirports]: (state, action) => {
    const region = action.payload;
    if (region === "All") return initialState;
    return initialState.filter((opt) => opt.region === region);
  },
});
