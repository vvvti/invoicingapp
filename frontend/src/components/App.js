import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/header/Header";
import Dashboard from "./invoices/Dashboard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
