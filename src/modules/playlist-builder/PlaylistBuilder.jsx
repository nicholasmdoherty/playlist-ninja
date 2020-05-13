import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { connect } from "react-redux";
import Spacer from "../../common/components/Spacer";
import PlaylistInfo from "./subcomponents/PlaylistInfo";
import "./playlist-builder.css";
import PlaylistTrackStatistics from "./subcomponents/PlaylistTrackStatistics";
import TrackTable from "./subcomponents/TrackTable";
import PlaylistTracklist from "./subcomponents/PlaylistTracklist";
import Recommendations from "./subcomponents/Recommendations";

class PlaylistBuilder extends Component {
  render() {
    let { selectedPlaylist, api } = this.props;

    if (!selectedPlaylist) {
      return (
        <div id="playlist-builder-wrapper" className="p-4">
          <Col xs={12}>
            <Spacer percentage={3} />
            <div className="w-100 h-100 no-selected-playlist">
              <h1 className="display-4"> No playlist selected... </h1>
              <br />
              <p className="lead">
                Please{" "}
                <a href="#/profile">select a playlist from your profile</a> to
                begin editing.
              </p>
            </div>
          </Col>
        </div>
      );
    }

    return (
      <div id="playlist-builder-wrapper" className="p-4">
        <PlaylistInfo playlist={selectedPlaylist} api={api} />
        <PlaylistTrackStatistics tracks={selectedPlaylist.tracks} api={api} />
        <br />
        <PlaylistTracklist
          tracks={selectedPlaylist.tracks}
          playlistId={selectedPlaylist.id}
        />
        <br />
        <hr />
        <br />
        <Recommendations
          playlistTracks={selectedPlaylist.tracks}
          playlistId={selectedPlaylist.id}
        />
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
