import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { connect } from "react-redux";
import Spacer from "../../common/components/Spacer";
import PlaylistInfo from "./subcomponents/PlaylistInfo";
import "./playlist-builder.css";

class PlaylistBuilder extends Component {
  render() {
    let { selectedPlaylist } = this.props;

    if (!selectedPlaylist) {
      return (
        <div id="playlist-builder-wrapper">
          <Col xs={12}>
            <Spacer percentage={3} />
            <div className="w-100 h-100 no-selected-playlist">
              <h1 className="display-4"> No playlist selected... </h1>
              <br />
              <p className="lead">
                Would you like to <a href="">create a new one?</a>
              </p>
              <p className="lead"> or </p>
              <p className="lead">
                <a href="">edit an existing one?</a>
              </p>
            </div>
          </Col>
        </div>
      );
    }

    return (
      <div id="playlist-builder-wrapper">
        <PlaylistInfo playlist={selectedPlaylist} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    api: state.api ? state.api.spotifyApi : null,
    selectedPlaylist: state.playlist ? state.playlist.selectedPlaylist : null
  };
};

export default connect(mapStateToProps)(PlaylistBuilder);