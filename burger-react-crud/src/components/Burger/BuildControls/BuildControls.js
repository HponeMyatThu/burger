import React from "react";

import classes from "../BuildControls/BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
];

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current Proce : {props.price.toFixed(2)}</p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        type={ctrl.type}
        add={() => props.ingredientsAdd(ctrl.type)}
        remove={() => props.ingredientsRemove(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button className={classes.OrderButton} onClick={props.ordered} disabled={!props.purchaseable} >ORDER NOW</button>
  </div>
);

export default BuildControls;
