import React, { Component } from "react";
import "./common-components.css";
import { isBelowSmallBreakpoint } from "../constants";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="main-app-nav">
        <div className="main-nav-button">
          <Link to="profile" className="text-dark">
            <i
              className={`far fa-address-card ${
                isBelowSmallBreakpoint()
                  ? "main-nav-icon-phone"
                  : "main-nav-icon-desktop"
              }`}
            />
          </Link>
        </div>

        <div className="main-nav-button">
          <i
            className={`fa fa-user-ninja p-2 ${
              isBelowSmallBreakpoint()
                ? "main-nav-icon-phone"
                : "main-nav-icon-desktop"
            }`}
          />
          {isBelowSmallBreakpoint() ? (
            <h6 className="m-0">PLAYLIST NINJA</h6>
          ) : (
            <h4 className="m-0">PLAYLIST NINJA</h4>
          )}
        </div>

        <div className="main-nav-button">
          <Link to="playlist-builder" className="text-dark">
            <i
              className={`fa fa-sliders-h ${
                isBelowSmallBreakpoint()
                  ? "main-nav-icon-phone"
                  : "main-nav-icon-desktop"
              }`}
            />
          </Link>
        </div>
      </div>
    );
  }
}
