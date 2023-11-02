import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "../Burger/Burger.module.css";

const Burger = (props) => {
  let transformIngredients = props.ingredients
    ? Object.keys(props.ingredients)
        .map((igKey, index) =>
          [...Array(props.ingredients[igKey])].map((_, i) => (
            <BurgerIngredient key={igKey + i + index} type={igKey} />
          ))
        )
        .reduce((arr, el) => arr.concat(el), [])
    : [];

  console.log(transformIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformIngredients}
      <BurgerIngredient type="bread-botton" />
    </div>
  );
};

export default Burger;
