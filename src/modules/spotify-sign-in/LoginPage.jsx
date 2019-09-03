import React, { Component } from "react";
import SpotifyLoginButton from "./SpotifyLoginButton";
import Spacer from "../../common/components/Spacer";
import "./sign-in.css";

class LoginPage extends Component {
  render() {
    return (
      <div id="logged-out-wrapper">
        <div className="w-50 p-3 custom-card text-center">
          <Spacer percentage={7} />
          <h3> Login to Playlist Ninja</h3>
          <hr />
          <SpotifyLoginButton />
        </div>
      </div>
    );
  }
}

export default LoginPage;
