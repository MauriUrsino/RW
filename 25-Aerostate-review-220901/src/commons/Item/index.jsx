import * as React from "react";

import { FaStar } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import s from "./style.module.scss";

function Item({ flight, removeFromFavorite }) {
  const { id, origin, destination } = flight;
  return (
    <div key={id} className={s.favorite}>
      <span>
        <FaStar />
        <p>
          {origin.name} &gt; {destination.name}
        </p>
      </span>
      <FaTrash
        style={{ cursor: "pointer" }}
        onClick={() => removeFromFavorite(flight)}
      />
    </div>
  );
}

Item.Empty = () => (
  <div className={s.favorite}>
    <p>Add flights to favorites to see them here!</p>
  </div>
);

export default Item;
