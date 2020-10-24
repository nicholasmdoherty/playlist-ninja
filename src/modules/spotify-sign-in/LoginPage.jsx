import React, { Component } from "react";
import SpotifyLoginButton from "./SpotifyLoginButton";
import Spacer from "../../common/components/Spacer";
import "./sign-in.css";
import { Col, Row } from "react-bootstrap";

class LoginPage extends Component {
  render() {
    return (
      <Row id="logged-out-wrapper" className="mt-5 flex-content-center">
        <Col xs={0} md={2}></Col>
        <Col xs={12} md={8} className="p-4">
          <h1 className="display-4 arts-and-crafts-font mobile-title-font">
            ULTIMATE CONTROL OVER THE COMPOSITION OF YOUR PLAYLISTS
          </h1>
          <p>
            PlaylistNinja gives you the power to fine tune the powerful
            recommendation engine in the Spotify API.
          </p>
          <p className="mb-4">
            We give you an interface that exposes the properties used in the
            recommendation engine, allowing you to configure recommendations and
            discover new music by selecting seeds and target properties when
            searching for songs.
          </p>
          <SpotifyLoginButton />
        </Col>
        <Col xs={0} md={2}></Col>
      </Row>
    );
  }
}

export default LoginPage;
