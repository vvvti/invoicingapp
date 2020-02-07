import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getInvoices } from "../../actions/invoices";

export class Invoices extends Component {
  static propTypes = {
    invoices: PropTypes.array.isRequired
  };
  render() {
    return (
      <div>
        <h1>Invoices List</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  invoices: state.invoices.invoices
});

export default connect(mapStateToProps)(Invoices);
