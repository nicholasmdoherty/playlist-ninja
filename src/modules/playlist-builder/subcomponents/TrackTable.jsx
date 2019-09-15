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
            offset: { uri: `spotify:track:${spotifyTrackId}` }
          })
          .then(
            response => {
              //TODO: Handle response data and store currently playing.
            },
            error => {
              //TODO: Handle error case
              console.error(error);
            }
          );
      } else {
        api
          .play({
            uris: [`spotify:track:${spotifyTrackId}`]
          })
          .then(
            response => {
              //TODO: Handle response data and store currently playing.
            },
            error => {
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
        .addTracksToPlaylist(playlistId, [
          { uri: `spotify:track:${spotifyTrackId}` }
        ])
        .then(
          async response => {
            // refresh the selected playlist
            // TODO: make an action to add it instead of reloading the whole playlist.
            await setSelectedPlaylist(playlistId, api);
            if (this.props.refreshTracks) {
              this.props.refreshTracks();
            }
          },
          error => {
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
          {
            uri: `spotify:track:${spotifyTrackId}`
          }
        ])
        .then(
          async response => {
            // refresh the selected playlist
            // TODO: make an action to add it instead of reloading the whole playlist.
            await setSelectedPlaylist(playlistId, api);

            if (this.props.refreshTracks) {
              this.props.refreshTracks();
            }
          },
          error => {
            //TODO: Handle error case
            console.error(error);
          }
        );
    };
  }

  render() {
    return (
      <Table responsive striped hover size="sm" className="text-left">
        <thead></thead>
        <tbody>
          {this.props.tracks.map(track => {
            return (
              <tr>
                <td className="maxw-50-view">
                  <div className="d-flex align-center">
                    {track.album.images[0] && (
                      <Image
                        src={track.album.images[0].url}
                        className="track-table-image m-1"
                      />
                    )}
                    <div className="break-long-words">
                      <p className="track-table-title">{track.name}</p>
                      <p className="track-table-font ">
                        {track.artists.map((artist, index) => {
                          return index === track.artists.length - 1
                            ? artist.name
                            : artist.name + ", ";
                        })}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="h-100 break-long-words d-flex justify-end p-1 align-center">
                  {this.props.tracksInPlaylist ? (
                    <Button
                      onClick={this.handleRemoveTrackFromPlaylist(track.id)}
                      className="mr-1 mt-1 mb-1"
                      variant="danger"
                    >
                      -
                    </Button>
                  ) : (
                    <Button
                      onClick={this.handleAddTrackToPlaylist(track.id)}
                      className="mr-1 mt-1 mb-1"
                    >
                      +
                    </Button>
                  )}
                  <Button
                    className="ml-1 mt-1 mb-1"
                    onClick={this.handlePlayTrackOnSpotify(track.id)}
                  >
                    {" "}
                    Play{" "}
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => {
  return {
    api: state.api.spotifyApi
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedPlaylist: (playlistId, spotifyApi) =>
      dispatch(setSelectedPlaylist(playlistId, spotifyApi))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackTable);
