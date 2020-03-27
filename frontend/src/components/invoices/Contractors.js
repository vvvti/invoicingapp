import React, { Component } from "react";
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
    return <div></div>;
  }
}

const mapStateToProps = state => ({
  contractors: state.contractors.contractors
});

export default connect(mapStateToProps, { getContractors })(Contractors);
