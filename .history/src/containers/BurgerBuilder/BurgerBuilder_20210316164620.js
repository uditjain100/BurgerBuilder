import React, { Component } from "react";
import Aux from "../../hoe/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENTS_PRICE = {
  salad: 0,
  meat: 0,
  bacon: 0,
  cheese: 0,
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
    };
  }

  addIngredientsHandler = (type) => {
    const upadtedCount = this.state.ingredients[type]++;
    const upadtedIngredients = { ...this.state.ingredients };
    upadtedIngredients[type] = upadtedCount;
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
