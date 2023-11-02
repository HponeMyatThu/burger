import React from "react";

import Auxilitary from "../../../hoc/Auxilitary";

const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => (
    <li key={igKey}>
      <span>{igKey}</span> : {props.ingredients[igKey]}
    </li>
  ));

  return (
    <Auxilitary>
      <p>Your Order</p>
      <p>Your delicious burger with following ingredients</p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to checkOut?</p>
    </Auxilitary>
  );
};

export default OrderSummary;
