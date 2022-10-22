import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import Item from "../../commons/Item";
import { removeFromFavs } from "../../state/user";

export default function Sidebar() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.user.favorites);

  const removeFromFavorite = (flight) => {
    dispatch(removeFromFavs(flight));
  };

  if (!favorites || !favorites.length) return <Item.Empty />;

  return (
    <>
      {favorites.map((fav) => (
        <Item
          key={fav.id}
          flight={fav}
          removeFromFavorite={removeFromFavorite}
        />
      ))}
    </>
  );
}
