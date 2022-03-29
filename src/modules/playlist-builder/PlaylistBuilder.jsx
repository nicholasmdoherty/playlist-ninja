import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import Spacer from "../../common/components/Spacer";
import PlaylistInfo from "./subcomponents/PlaylistInfo";
import "./playlist-builder.css";
import TrackTable from "./subcomponents/Tracklist/TrackTable";
import PlaylistTracklist from "./subcomponents/Tracklist/PlaylistTracklist";
import Recommendations from "./subcomponents/Recommendations/Recommendations";
import MyPlaylists from "../profile/subcomponents/personal-playlists/PersonalPlaylists";
import { setUserId } from "../../redux/actions/apiActions";
import { deepCamelCaseKeys } from "../../common/constants";

import FeatherIcon from 'feather-icons-react'
import PlaylistStatistics from "./subcomponents/PlaylistStatistics/PlaylistStatistics";

class PlaylistBuilder extends Component {
  render() {
    let { selectedPlaylist, api, userId } = this.props;

    if (!selectedPlaylist) {
      return (
        <div id="playlist-builder-wrapper">
          <span className='edit-playlist-header'>Edit Playlist</span>
          <MyPlaylists title="Select a playlist to edit" userId={userId} />
        </div>
      );
    }

    return (
      <div id="playlist-builder-wrapper">
        <span className='edit-playlist-header'>Edit Playlist</span>
        <div className="playlist-info-card card-style">
          <img 
            width={300} 
            height={300} 
            src={selectedPlaylist.images.length > 0 ? selectedPlaylist.images[0].url : ''}
            alt={`"${selectedPlaylist.name}" Cover`} 
            onError={( { currentTarget } ) =>{
              currentTarget.onerror = null;
              currentTarget.src = '/assets/generic-image.png'
          }} 
            />
          <div className="playlist-info-card-inner">
            <div className="playlist-info-card-name-desc">
              <span className="playlist-info-card-name">{selectedPlaylist.name}</span>
              <span className="playlist-info-card-desc">{selectedPlaylist.description || 'No description provided.'}</span>
            </div>
            {/*<div className="playlist-info-card-button-row">
              <div className="edit-button" onClick={() => { }}>
                <FeatherIcon
                  icon='edit'
                  width={16}
                  height={16}
                />
                Edit Title / Description
              </div>
              <span className="spotify-link">
                View on Spotify
                <FeatherIcon
                  icon="external-link"
                  height={16}
                  width={16}
                />
              </span>
        </div>*/}
          </div>
        </div>

        <Row>
          <Col xs={7}>
            <PlaylistTracklist
              tracks={selectedPlaylist.tracks}
              playlistId={selectedPlaylist.id}
            />
          </Col>
          <Col xs={5}>
            <PlaylistStatistics playlist={selectedPlaylist} api={api} />
          </Col>
        </Row>

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
    selectedPlaylist: state.playlist ? state.playlist.selectedPlaylist : null,
    userId: state.api ? state.api.userId : null
  };
};

export default connect(mapStateToProps)(PlaylistBuilder);
