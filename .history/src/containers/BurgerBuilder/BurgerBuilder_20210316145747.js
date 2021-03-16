import React, { Component } from "react";
import Aux from "../../hoe/Auxillary";
import Burger from "../../components/Burger/Burger";
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

  render() {
    return (
      <Aux>
        <h1>Burger</h1>
        <Burger ingredients={this.state.ingredients} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
