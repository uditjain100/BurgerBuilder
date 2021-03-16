import React from "react";
import classes from "./BurgerBuilder.css";

const BurgerIngredients = (props) => {
  let ingredients = noll;

  switch (props.type) {
    case "bread-bottom":
      ingredients = <div className={classes.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredients = (<div className={classes.BreadTop}>
        <div className={classes.Seed1}></div>
        <div className={classes.Seed2}></div>
        </div>;)
      break;
  }
};

export default BurgerIngredients;
