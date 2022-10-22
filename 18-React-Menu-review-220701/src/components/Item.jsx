import React from "react";

import { FaArrowRight } from "react-icons/fa";

const Item = function ({ name, description, price }) {
  return (
    <li>
      <FaArrowRight />
      <strong>{name}</strong>
      <small>- {description}</small>
      <em>${price}</em>
    </li>
  );
};

export default Item;
