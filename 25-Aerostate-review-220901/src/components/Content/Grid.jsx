import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../../commons/Card";
import { addToFavs } from "../../state/user";

import s from "./style.module.scss";

export default function Grid() {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flights);

  const addToFavorite = (flight) => {
    dispatch(addToFavs(flight));
  };
  // Si no hay vuelos muestro el loading
  if (!flights.length) {
    return (
      <section className={s.grid}>
        <Card.Loading />
      </section>
    );
  }

  // Si hay vuelos listo las tarjetas
  return (
    <section className={s.grid}>
      {flights.map((flight) => (
        <Card key={flight.id} flight={flight} addToFavorite={addToFavorite} />
      ))}
    </section>
  );
}
