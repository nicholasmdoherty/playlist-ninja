import React, { Component } from "react";
import { Table, Button, Image } from "react-bootstrap";
import { connect } from "react-redux";
import autoBind from "react-autobind";
import { setSelectedPlaylist } from "../../../redux/actions/playlistActions";
import "../playlist-builder.css";

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

  render() {
    return (
        <div>
          {this.props.tracks.map((track) => {
            return (
              <div className="d-flex w-100 space-between align-center">
                <div className="maxw-50-view">
                  <div className="d-flex align-center">
                    {track.album.images[0] && (
                      <Image
                        src={track.album.images[0].url}
                        className="track-table-image m-1"
                      />
                    )}
                    <div className="break-long-words pl-2 mt-1">
                      <p className="track-table-title-font mb-0">{track.name}</p>
                      <p className="track-table-font mb-0">
                        {track.artists.map((artist, index) => {
                          return index === track.artists.length - 1
                            ? artist.name
                            : artist.name + ", ";
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-100 break-long-words d-flex justify-end p-1 align-center">
                  {this.props.tracksInPlaylist ? (
                    <Button
                      onClick={this.handleRemoveTrackFromPlaylist(track.id)}
                      className="mr-1 mt-1 mb-1 pn-danger-button pn-button button-font"
                      variant="danger"
                    >
                      <i className="fa fa-trash"></i>
                    </Button>
                  ) : (
                    <Button
                      onClick={this.handleAddTrackToPlaylist(track.id)}
                      className="mr-1 mt-1 mb-1 pn-primary-button pn-button button-font"
                    >
                    <i className="fa fa-plus"></i>
                    </Button>
                  )}
                  <Button
                    className="ml-1 mt-1 mb-1 pn-primary-button pn-button button-font"
                    onClick={this.handlePlayTrackOnSpotify(track.id)}
                  >
                    <i className="fa fa-play"></i>
                  </Button>
                </div>
              </div>
            );
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
