import React from "react";

import SpotifyLoginButton from "./SpotifyLoginButton";

import "./sign-in.css";

const LoginPage = () => {

  return (
    <div id="logged-out-wrapper">
      <img id="ninja-image" src="/assets/playlistninja-login.png" />
      <span className="pn-logo-text">playlistninja.app</span>
      <div id='login-page-text'>
        <h1 id="sign-in-header">
          More control over Spotify recommendations.
        </h1>
        <p id='sign-in-subtext'>
        Finding new music for your playlists just got a lot easier, with more customization over the recommendation algorithm on Spotify.
        </p>
        <SpotifyLoginButton />
      </div>
      <div id="links-container">
        {/*<span>Twitter</span>
          <span>Discord</span>*/}
      </div>
    </div>
  );
}

export default LoginPage;