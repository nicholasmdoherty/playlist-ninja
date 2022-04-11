import React from "react";

import SpotifyLoginButton from "./SpotifyLoginButton";

import "./sign-in.css";

const LoginPage = () => {

  return (
    <div id="logged-out-wrapper">
      <img id="ninja-image" src="/assets/ninja-login.svg" />
      <img src="/assets/playlistninja-nav-logo.svg" height="32px" width="auto"/>
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
        <span>
          {/*<i class="icon-link fab fa-discord"></i>
           <i class="icon-link fab fa-twitter"></i>*/}
        </span>
        <a id="image-attribution-link" href="https://storyset.com/people">Ninja illustration by Storyset</a>
      </div>
    </div>
  );
}

export default LoginPage;