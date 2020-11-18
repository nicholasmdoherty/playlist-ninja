import React from "react";
import { HashRouter, Route } from "react-router-dom";
import LoginPage from "./modules/spotify-sign-in/LoginPage";
import SpotifyLogoutButton from "./modules/spotify-sign-in/SpotifyLogoutButton";
import { getCookie } from "./common/constants";
import "./App.css";
import Navbar from "./common/components/Navbar";
import { connect } from "react-redux";
import { setSpotifyApiAction } from "./redux/actions/apiActions";
import Profile from "./modules/profile/Profile";
import PlaylistBuilder from "./modules/playlist-builder/PlaylistBuilder";
import { Container, Row } from "react-bootstrap";
import autoBind from "react-autobind";
import MutualMelodiesPreferenceQuiz from "./modules/mutual-melodies-preference-quiz/MutualMelodiesPreferenceQuiz";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      token: "",
    };

    autoBind(this);
  }

  componentDidMount() {
    // Add an event listener to update the App component
    // when the hash link changes. This is to check if the cookie is expired or not.
    const scrollFunction = function () {
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", scrollFunction);
    window.addEventListener("beforeunload", scrollFunction);

    window.addEventListener("hashchange", () => {
      this.checkForLogin();
    });

    this.checkForLogin();
  }

  checkForLogin() {
    let token = getCookie("spotifyAccessToken");

    if (token !== "" && token != this.state.token) {
      this.setState({ loggedIn: true, token: token });
      this.props.setSpotifyApi(token);
    } else if (token === "") {
      this.setState({ loggedIn: false, token: "" });
    }
  }

  render() {
    let { loggedIn } = this.state;

    return (
      <HashRouter>
        <div className="" id="app-wrapper">
          <Navbar noButtons={!loggedIn} />

          {loggedIn ? (
            <div id="playlists-view-wrapper">
              <Container>
                <Row>
                  <Route exact path="(|/profile)" component={Profile} />
                  <Route
                    exact
                    path="/playlist-builder"
                    component={PlaylistBuilder}
                  />
                  <Route exact path="/music-preference-quiz" component={MutualMelodiesPreferenceQuiz} />
                </Row>
              </Container>
            </div>
          ) : (
            <Container>
              <LoginPage />
            </Container>
          )}
        </div>
      </HashRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSpotifyApi: (accessToken) => dispatch(setSpotifyApiAction(accessToken)),
  };
};

export default connect(null, mapDispatchToProps)(App);
