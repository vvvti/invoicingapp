import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getInvoices } from "../../actions/invoices";

export class Invoices extends Component {
  static PropTypes = {
    invoices: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getInvoices();
  }
  render() {
    return (
      <dFragment>
        <h2>Invoices</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Invoice date</th>
              <th>Invoice number</th>
              <th>Date of sell</th>
              <th>Payment form</th>
              <th>Payment date</th>
              <th>Created</th>
              <th>Updated</th>
              <th>User</th>
              <th>Contractor</th>
              <th>ID</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.invoices.map(invoices => (
              <tr key={invoices.id}>
                <td>{invoices.id}</td>
                <td>{invoices.invoice_date}</td>
                <td>{invoices.invoice_number}</td>
                <td>{invoices.sell_date}</td>
                <td>{invoices.payment_form}</td>
                <td>{invoices.payment_date}</td>
                <td>{invoices.created}</td>
                <td>{invoices.updated}</td>
                <td>{invoices.user}</td>
                <td>{invoices.contractor}</td>
                <td>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </dFragment>
    );
  }
}

const mapStateToProps = state => ({
  invoices: state.invoices.invoices
});

export default connect(mapStateToProps, { getInvoices })(Invoices);
