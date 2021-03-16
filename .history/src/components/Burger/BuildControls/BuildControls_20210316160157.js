import React from "react";
import classes from "./BuildControls.css";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return <div className={classes.BuildControls}></div>;
};
