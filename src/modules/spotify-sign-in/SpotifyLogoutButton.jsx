import React, { Component } from "react";
import { setCookie } from "../../common/constants";
import autoBind from "react-autobind";

class SpotifyLogoutButton extends Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  handleLogout() {
    // remove the cookie from the browser that holds the token to logout
    setCookie("spotifyAccessToken", "", 0);
    document.location.reload();
  }

  render() {
    return (
      <button className="btn btn-medium btn-danger" onClick={this.handleLogout}>
        Log Out
      </button>
    );
  }
}

export default SpotifyLogoutButton;
