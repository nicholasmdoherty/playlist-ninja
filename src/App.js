import React from "react";
import { HashRouter, Route } from "react-router-dom";
import LoginPage from "./modules/spotify-sign-in/LoginPage";
import SpotifyLogoutButton from "./modules/spotify-sign-in/SpotifyLogoutButton";
import { getCookie } from "./common/constants";
import "./App.css";
import Navbar from "./common/components/Navbar";

function App() {
  let loggedIn = false;
  let token = getCookie("spotifyAccessToken");

  if (token !== "") {
    loggedIn = true;
  }

  return (
    <HashRouter>
      <div className="d-flex" id="app-wrapper">
        {loggedIn ? (
          <div id="playlists-view-wrapper">
            <Navbar />
            <h2> Logged in</h2>
            <SpotifyLogoutButton />
          </div>
        ) : (
          <LoginPage />
        )}
      </div>
    </HashRouter>
  );
}

export default App;
