import React, { Component } from "react";
import { Table, Button, Image } from "react-bootstrap";
import { connect } from "react-redux";
import autoBind from "react-autobind";
import { setSelectedPlaylist } from "../../../../redux/actions/playlistActions";
import FeatherIcon from 'feather-icons-react';

import './Tracklist.css'

class TrackTable extends Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  /**
   * Handles playling a single track on the user's currently active spotify device.
   * @param {string} spotifyTrackId The ID of the spotify track that should be played.
   */
  handlePlayTrackOnSpotify(spotifyTrackId) {
    return () => {
      let { api, playlistId, tracksInPlaylist } = this.props;

      if (tracksInPlaylist) {
        api
          .play({
            context_uri: `spotify:playlist:${playlistId}`,
            offset: { uri: `spotify:track:${spotifyTrackId}` },
          })
          .then(
            (response) => {
              //TODO: Handle response data and store currently playing.
            },
            (error) => {
              //TODO: Handle error case
              console.error(error);
            }
          );
      } else {
        api
          .play({
            uris: [`spotify:track:${spotifyTrackId}`],
          })
          .then(
            (response) => {
              //TODO: Handle response data and store currently playing.
            },
            (error) => {
              //TODO: Handle error case
              console.error(error);
            }
          );
      }
    };
  }

  /**
   * Handles adding a single track to the playlist with the id given to the TrackTable
   * @param {string} spotifyTrackId The ID of the spotify track that should be added.
   */
  handleAddTrackToPlaylist(spotifyTrackId) {
    return () => {
      let { playlistId, api } = this.props;

      api
        .addTracksToPlaylist(playlistId, [`spotify:track:${spotifyTrackId}`])
        .then(
          async (response) => {
            // refresh the selected playlist
            // TODO: make an action to add it instead of reloading the whole playlist.
            await setSelectedPlaylist(playlistId, api);
            if (this.props.updateCallback) {
              this.props.updateCallback();
            }
          },
          (error) => {
            //TODO: Handle error case
            console.error(error);
          }
        );
    };
  }

  /**
   * Handles removing a single track to the playlist with the id given to the TrackTable
   * @param {string} spotifyTrackId The ID of the spotify track that should be removed.
   */
  handleRemoveTrackFromPlaylist(spotifyTrackId) {
    return () => {
      let { playlistId, api, setSelectedPlaylist } = this.props;

      api
        .removeTracksFromPlaylist(playlistId, [
          { uri: `spotify:track:${spotifyTrackId}` },
        ])
        .then(
          async (response) => {
            // refresh the selected playlist
            // TODO: make an action to add it instead of reloading the whole playlist.
            await setSelectedPlaylist(playlistId, api);

            if (this.props.updateCallback) {
              this.props.updateCallback();
            }
          },
          (error) => {
            //TODO: Handle error case
            console.error(error);
          }
        );
    };
  }

  renderTrackRow = (track, index) => {
    return (
      <div className={`track-row ${index % 2 === 1 ? 'odd' : ''}`}>
        <div className="track-row-image-title">
          {track.album.images[0] && (
            <Image
              width={60}
              height={60}
              src={track.album.images[0].url}
              className="track-table-image"
            />
          )}
          <span className="track-name">{track.name}</span>
        </div>
        <div className="track-row-actions">
          <div
            className="play-button"
            onClick={this.handlePlayTrackOnSpotify(track.id)}
          >
            <FeatherIcon icon="play" width={16} height={16} />
          </div>
          {this.props.tracksInPlaylist ? (
            <div
              className="trash-button"
              onClick={this.handleRemoveTrackFromPlaylist(track.id)}
            >
              <FeatherIcon icon="trash-2" width={16} height={16} />
            </div>
          ) : (
            <div
              className="plus-button"
              onClick={this.handleAddTrackToPlaylist(track.id)}
            >
              <FeatherIcon icon="plus" width={16} height={16} />
            </div>
          )}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.tracks.map((track, index) => {
          return this.renderTrackRow(track, index)
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    api: state.api.spotifyApi,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedPlaylist: (playlistId, spotifyApi) =>
      dispatch(setSelectedPlaylist(playlistId, spotifyApi)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackTable);
