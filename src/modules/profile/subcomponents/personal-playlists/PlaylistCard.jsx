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
        md={6}
        className={isBelowSmallBreakpoint() ? "p-4" : "p-3"}
      >
        <div className="playlist-card-content d-flex playlist-card">
          {playlist.images[0] ? (
            <Image
              src={playlist.images[0].url}
              className="mobile-playlist-card-image"
            />
          ) : (
            <div className={isBelowSmallBreakpoint() ? "w-25" : ""} />
          )}
          <div className="text-left pl-4">
            <p className="mb-0 paragraph-font fw-700">{playlist.name}</p>
            <p className="m-0 mb-3 paragraph-font">{playlist.public ? "Public" : "Private"}</p>

            <Button
              variant="primary"
              className="pn-primary-button pn-button button-font mr-1"
              onClick={this.selectPlaylist}
            >
              <i className="fa fa-pencil"></i>
            </Button>
            <Button
              variant="outline-danger"
              className="pn-danger-button pn-button button-font"
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
