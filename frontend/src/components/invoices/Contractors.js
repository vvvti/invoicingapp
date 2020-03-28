import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContractors } from "../../actions/contractors";

export class Contractors extends Component {
  static propTypes = {
    contractors: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getContractors();
  }
  render() {
    return (
      <Fragment>
        <h2>Contractors</h2>
        <table className="table table-stripes">
          <thead>
            <tr>
              <th>ID</th>
              <th>Contractor Name</th>
              <th>NIP</th>
              <th>REGON</th>
              <th>Phone number</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.contractors.map(contractor => (
              <tr key={contractor.id}>
                <td>{contractor.id}</td>
                <td>{contractor.contractor_name}</td>
                <td>{contractor.contractor_nip}</td>
                <td>{contractor.contractor_regon}</td>
                <td>{contractor.contractor_phone}</td>
                <td>{contractor.contractor_email}</td>
                <td>
                  <button>Delete</button>
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
  contractors: state.contractors.contractors
});

export default connect(mapStateToProps, { getContractors })(Contractors);
