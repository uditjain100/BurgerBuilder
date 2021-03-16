import classes from "./Burger.css";
import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map((igkey) => {
    return [...Array(props.ingredients[igkey])]
      .map((_, i) => {
        return <BurgerIngredient key={igkey + i} type={igkey} />;
      })
      .reduce((arr, el) => {}, []);
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default Burger;
