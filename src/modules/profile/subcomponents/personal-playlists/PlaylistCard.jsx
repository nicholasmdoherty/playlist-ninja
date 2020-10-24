import React, { Component } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import "./playlists.css";
import { setSelectedPlaylist } from "../../../../redux/actions/playlistActions";
import {
  isBelowSmallBreakpoint,
  isBelowExtraSmallBreakpoint,
} from "../../../../common/constants";

class PlaylistCard extends Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  selectPlaylist() {
    let { updateSelectedPlaylist, api, playlist } = this.props;

    updateSelectedPlaylist(playlist.id, api);
  }

  /**
   *  Renders a confirmation alert to make sure that the user wants to unfollow their playlist.
   */

  unfollowConfirmation() {
    return Swal.fire({
      title: "Unfollow Playlist",
      text:
        "Are you sure you want to unfollow? It will no longer be visible in your library.",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, unfollow this playlist.",
      cancelButtonText: "Cancel",
      allowEscapeKey: false,
      allowOutsideClick: false,
    });
  }

  /**
   *  Unfollows the playlist that this PlaylistCard represents.
   */
  unfollowPlaylist() {
    let { playlist, api, updatePlaylists } = this.props;

    this.unfollowConfirmation().then((result) => {
      if (result.value) {
        api.unfollowPlaylist(playlist.id).then(() => {
          Swal.fire({
            type: "success",
            text: `Unfollowed playlist: "${playlist.name}"`,
          });
          updatePlaylists();
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({ text: "Did not unfollow playlist." });
      }
    });
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.forceUpdate();
    });
  }

  render() {
    let { playlist } = this.props;

    return (
      <Col
        xs={12}
        sm={6}
        xl={4}
        className={isBelowSmallBreakpoint() ? "p-4" : "p-3"}
      >
        <div className="playlist-card-content text-center d-flex playlist-card content-card flex-column pt-4">
          {playlist.images[0] ? (
            <Image
              src={playlist.images[0].url}
              className="mobile-playlist-card-image"
            />
          ) : (
            <div className={isBelowSmallBreakpoint() ? "w-25" : ""} />
          )}
          <div className="text-left">
            <h5 className="m-1 ml-2">{playlist.name}</h5>
            <p className="ml-2 m-0">{playlist.public ? "Public" : "Private"}</p>
          </div>

          <div className="mobile-playlist-card-button-wrapper">
            <Button
              variant="primary"
              className="pn-primary-button"
              onClick={this.selectPlaylist}
            >
              <i className="fa fa-pencil"></i>
            </Button>
            <Button
              variant="outline-danger"
              className="pn-danger-button"
              onClick={this.unfollowPlaylist}
            >
              <i className="fa fa-trash"></i>
            </Button>
          </div>
        </div>
      </Col>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelectedPlaylist: (playlistId, spotifyApi) =>
      dispatch(setSelectedPlaylist(playlistId, spotifyApi)),
  };
};

export default connect(null, mapDispatchToProps)(PlaylistCard);
