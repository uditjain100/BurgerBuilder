import React, { Component } from "react";
import Aux from "../../hoe/Auxillary";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <h1>Burger Builder</h1>
        <main> {this.props.children} </main>
      </Aux>
    );
  }
}

export default Layout;
