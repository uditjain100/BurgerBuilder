import React, { Component } from "react";
import Aux from "../../hoe/Auxillary";
import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
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
