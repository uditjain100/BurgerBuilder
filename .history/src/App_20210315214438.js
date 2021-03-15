import React, { Component } from "react";
import Layout from "./components/Layouts/Layout";
import "./App.css";

class App extends Component {
  render() {
    return <Layout> {this.props.children} </Layout>;
  }
}

export default App;
