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
            <Spacer percentage={5} />
            <div className="w-100 h-100 no-selected-playlist">
              <h1 className="large-header-font"> No playlist selected... </h1>
              <p className="paragraph-font mt-4">
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
        <Spacer percentage={5} />
        <PlaylistTrackStatistics tracks={selectedPlaylist.tracks} api={api} />
        <Spacer percentage={5} />
        <PlaylistTracklist
          tracks={selectedPlaylist.tracks}
          playlistId={selectedPlaylist.id}
        />
        <Spacer percentage={5} />
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
