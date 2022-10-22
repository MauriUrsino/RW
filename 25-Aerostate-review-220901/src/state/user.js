import { createAction, createReducer } from "@reduxjs/toolkit";
import { message } from "antd";

export const setUser = createAction("SET_USER");
export const addToFavs = createAction("ADD_TO_FAVORITES");
export const removeFromFavs = createAction("REMOVE_FROM_FAVORITES");

const initialState = {
  id: null,
  name: null,
  img: null,
  favorites: [],
};

export default createReducer(initialState, {
  [setUser]: (state, action) => action.payload,
  [addToFavs]: (state, action) => {
    if (!state.id) {
      message.error(`To add a favorite you need to be logged in.`);
      return state;
    }
    if (state.favorites.find((fav) => fav.id === action.payload.id)) {
      message.error(`Flight already in favorites`);
      return state;
    }

    message.success(`Flight added to favorites`);
    return { ...state, favorites: [...state.favorites, action.payload] };
  },
  [removeFromFavs]: (state, action) => {
    message.success(`Flight removed from favorites`);
    return {
      ...state,
      favorites: state.favorites.filter((fav) => fav.id !== action.payload.id),
    };
  },
});
