import classes from "./Burger.css";
import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  const ingredients = Object.keys(props.ingredients).map((key) => {
    return [...Array(props.ingredients[key])];
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default Burger;
