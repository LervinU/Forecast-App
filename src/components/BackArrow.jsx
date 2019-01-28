import React, { Component } from "react";
import arrow from "../assets/svg/Arrow.svg";

class BackArrow extends Component {
  render() {
    return (
      <img
        id="backArrow"
        onClick={this.props.handleBack}
        src={arrow}
        alt="back"
      />
    );
  }
}

export default BackArrow;
