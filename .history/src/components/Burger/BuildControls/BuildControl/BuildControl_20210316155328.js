import React from "react";
import classes from "./Bui;dControl.css";

const BuildControl = (props) => {
  return (
    <div>
      <div> {props.label} </div>
      <button>Less</button>
      <button>More</button>
    </div>
  );
};
