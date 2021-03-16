import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price : <strong> {props.price.toFixed(2)} </strong>
      </p>

      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientsadded(ctrl.type)}
            removed={() => props.ingredientsremoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}
    </div>
  );
};

export default BuildControls;
