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
    const upadtedCount = this.state.ingredients[type] + 1;
    const upadtedIngredients = { ...this.state.ingredients };
    upadtedIngredients[type] = upadtedCount;
    const newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
    this.setState({ ingredients: upadtedIngredients, totalPrice: newPrice });
  };
  removeIngredientsHandler = (type) => {
    let upadtedCount = this.state.ingredients[type];
    if (upadtedCount > 0) upadtedCount--;
    const upadtedIngredients = { ...this.state.ingredients };
    upadtedIngredients[type] = upadtedCount;
    const newPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
    this.setState({ ingredients: upadtedIngredients, totalPrice: newPrice });
    console.log(this.state);
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] <= 0;
    console.log(disabledInfo);
    return (
      <Aux>
        <h1>Burger</h1>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientsremoved={this.removeIngredientsHandler}
          ingredientsadded={this.addIngredientsHandler}
          disabled={disabledInfo}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
