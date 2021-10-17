import React, { Component } from "react";
import SpotifyLoginButton from "./SpotifyLoginButton";
import Spacer from "../../common/components/Spacer";
import "./sign-in.css";
import { Col, Row } from "react-bootstrap";

class LoginPage extends Component {
  render() {
    return (
      <div id="logged-out-wrapper" className="my-5 flex-content-center">
        <div>
          <h1 className="large-header-font mobile-title-font mb-4">
            Completely control the composition of your playlists.
          </h1>
          <p className="paragraph-font">
            PlaylistNinja gives you the power to fine tune the powerful
            recommendation engine in the Spotify API.
          </p>
          <p className="paragraph-font mb-4">
            We give you an interface that exposes the properties used in the
            recommendation engine, allowing you to configure recommendations and
            discover new music by selecting seeds and target properties when
            searching for songs.
          </p>
          <SpotifyLoginButton />
        </div>
      </div>
    );
  }
}

export default LoginPage;
