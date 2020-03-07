import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/header/Header";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <h1>Hello</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
