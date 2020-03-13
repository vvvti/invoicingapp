import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getInvoices, deleteInvoice } from "../../actions/invoices";

export class Invoices extends Component {
  static propTypes = {
    invoices: PropTypes.array.isRequired,
    getInvoices: PropTypes.func.isRequired,
    deleteInvoice: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getInvoices();
  }
  render() {
    return (
      <Fragment>
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
            {this.props.invoices.map(invoice => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.invoice_date}</td>
                <td>{invoice.invoice_number}</td>
                <td>{invoice.sell_date}</td>
                <td>{invoice.payment_form}</td>
                <td>{invoice.payment_date}</td>
                <td>{invoice.created}</td>
                <td>{invoice.updated}</td>
                <td>{invoice.user}</td>
                <td>{invoice.contractor}</td>
                <td>
                  <button
                    onClick={this.props.deleteInvoice.bind(this, invoice.id)}
                    className="btn btn-outline-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  invoices: state.invoices.invoices
});

export default connect(mapStateToProps, { getInvoices, deleteInvoice })(
  Invoices
);
