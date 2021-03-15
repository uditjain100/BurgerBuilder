import React, { Component } from "react";
import moduleName from "../../hoe/Auxillary";

class Layout extends Component {
  render() {
    return (
      <div>
        <h1>Burger Builder</h1>
        <main> {this.props.children} </main>
      </div>
    );
  }
}

export default Layout;
