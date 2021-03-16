import React, { Component } from "react";
import Aux from "../../hoe/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENTS_PRICE = {
  salad: 0.5,
  meat: 1.3,
  bacon: 0.7,
  cheese: 0.4,
};
class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        meat: 0,
        bacon: 0,
        cheese: 0,
      },
      totalPrice: 4,
    };
  }

  addIngredientsHandler = (type) => {
    const upadtedCount = this.state.ingredients[type]++;
    const upadtedIngredients = { ...this.state.ingredients };
    upadtedIngredients[type] = upadtedCount;
    const newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
  };

  render() {
    return (
      <Aux>
        <h1>Burger</h1>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Aux>
    );
  }
}

export default BurgerBuilder;
