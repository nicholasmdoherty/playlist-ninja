import React, { Component } from "react";
import { setCookie } from "../../common/constants";
import { Button } from "react-bootstrap";
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
      <Button
        variant="link"
        className="pn-danger-button mt-3 px-2"
        onClick={this.handleLogout}
        style={{ color: "red", width: "fit-content" }}
      >
        LOG OUT
      </Button>
    );
  }
}

export default SpotifyLogoutButton;
