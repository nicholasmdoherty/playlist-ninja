import React, { Component } from "react";

export default class Spacer extends Component {
  render() {
    return (
      <div
        style={{
          height: `${
            this.props.percentage
              ? this.props.percentage + "vh"
              : this.props.pixels + "px"
          }`
        }}
      ></div>
    );
  }
}
