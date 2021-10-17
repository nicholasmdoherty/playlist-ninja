import React, { Component } from "react";
import "./common-components.css";
import { isBelowSmallBreakpoint } from "../constants";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  componentDidMount() {
    window.addEventListener("resize", () => {
      this.forceUpdate();
    });
  }

  render() {
    return (
      <div>
        <div className="main-app-nav">
          {!this.props.noButtons && (
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
          )}

          <div className="main-nav-button">
            {isBelowSmallBreakpoint() ? (
              <h6 className="m-0 mt-1 nav-title">PLAYLIST NINJA</h6>
            ) : (
              <h4 className="m-0 mt-1 nav-title">PLAYLIST NINJA</h4>
            )}
          </div>

          {!this.props.noButtons && (
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
          )}
        </div>
        <div className="main-app-nav-ghost" />
      </div>
    );
  }
}
