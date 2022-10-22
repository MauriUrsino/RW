import React from "react";

import Item from "./Item";

const List = function ({ list }) {
  return list.map(({ name, description, price }) => (
    <Item key={name} name={name} description={description} price={price} />
  ));
};

export default List;
