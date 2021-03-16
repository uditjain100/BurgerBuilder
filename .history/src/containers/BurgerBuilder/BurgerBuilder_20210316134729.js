import React, { Component } from "react";
import Aux from "../../hoe/Auxillary";
import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 1,
        meat: 2,
        bacon: 1,
        cheese: 2,
      },
    };
  }

  render() {
    return (
      <Aux>
        <h1>Burger</h1>
        <Burger />
      </Aux>
    );
  }
}

export default BurgerBuilder;
