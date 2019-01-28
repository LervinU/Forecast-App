import React, { Component } from "react";

class ChngTemp extends Component {
  state = {};
  render() {
    const change = this.props.changeTemp;
    return (
      <div id="changeTemp">
        {this.props.tempUnit === false ? (
          <h4 onClick={change}>To F</h4>
        ) : (
          <h4 onClick={change}>To C</h4>
        )}
      </div>
    );
  }
}

export default ChngTemp;
