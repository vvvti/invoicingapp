import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addInvoice } from "../../actions/invoices";

export class Form extends Component {
  state = {
    Invoice_date: "",
    Invoice_number: "",
    Date_sell: "",
    Payment_form: "",
    Payment_date: "",
    User: "",
    Contractor: ""
  };

  static propTypes = {
    addInvoice: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const {
      Invoice_date,
      Invoice_number,
      Date_sell,
      Payment_form,
      Payment_date,
      User,
      Contractor
    } = this.state;
    const invoice = {
      Invoice_date,
      Invoice_number,
      Date_sell,
      Payment_form,
      Payment_date,
      User,
      Contractor
    };
    this.props.addInvoice(invoice);
  };

  render() {
    const {
      Invoice_date,
      Invoice_number,
      Date_sell,
      Payment_form,
      Payment_date,
      User,
      Contractor
    } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Invoice</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Invoice date</label>
            <input
              className="form-control"
              type="datetime"
              name="Invoice_date"
              onChange={this.onChange}
              value={Invoice_date}
            />
          </div>
          <div className="form-group">
            <label>Invoice number</label>
            <input
              className="form-control"
              type="text"
              name="Invoice_number"
              onChange={this.onChange}
              value={Invoice_number}
            />
          </div>
          <div className="form-group">
            <label>Date of sell</label>
            <input
              className="form-control"
              type="datetime"
              name="Date_sell"
              onChange={this.onChange}
              value={Date_sell}
            />
          </div>
          <div className="form-group">
            <label>Payment form</label>
            <input
              className="form-control"
              type="text"
              name="Payment_form"
              onChange={this.onChange}
              value={Payment_form}
            />
          </div>
          <div className="form-group">
            <label>Payment date</label>
            <input
              className="form-control"
              type="datetime"
              name="Payment_date"
              onChange={this.onChange}
              value={Payment_date}
            />
          </div>
          <div className="form-group">
            <label>Contractor</label>
            <input
              className="form-control"
              type="number"
              name="Contractor"
              onChange={this.onChange}
              value={Contractor}
            />
          </div>
          <div className="form-group">
            <label>User</label>
            <input
              className="form-control"
              type="number"
              name="User"
              onChange={this.onChange}
              value={User}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addInvoice })(Form);
