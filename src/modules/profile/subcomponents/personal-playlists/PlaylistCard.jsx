import React, { Component } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import "./playlists.css";
import { setSelectedPlaylist } from "../../../../redux/actions/playlistActions";
import {
  isBelowSmallBreakpoint,
  isBelowExtraSmallBreakpoint
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
      allowOutsideClick: false
    });
  }

  /**
   *  Unfollows the playlist that this PlaylistCard represents.
   */
  unfollowPlaylist() {
    let { playlist, api, updatePlaylists } = this.props;

    this.unfollowConfirmation().then(result => {
      if (result.value) {
        api.unfollowPlaylist(playlist.id).then(() => {
          Swal.fire({
            type: "success",
            text: `Unfollowed playlist: "${playlist.name}"`
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
      <Col xs={12} sm={12} lg={12} className="playlist-card-col">
        <Row
          className={
            !isBelowSmallBreakpoint()
              ? "playlist-card content-card playlist-row-height p-1"
              : "playlist-card content-card p-1"
          }
        >
          <Col
            xs={12}
            sm={6}
            className={`playlist-card-content text-center d-flex ${
              isBelowExtraSmallBreakpoint() ? "space-between" : ""
            }`}
          >
            {playlist.images[0] ? (
              <Image
                src={playlist.images[0].url}
                className={
                  isBelowSmallBreakpoint()
                    ? "mobile-playlist-card-image"
                    : "desktop-playlist-card-image"
                }
              />
            ) : (
              <div className="w-25" />
            )}

            <div
              className={
                isBelowExtraSmallBreakpoint() ? "text-right" : "text-left"
              }
            >
              <h5 className="m-1 ml-2">{playlist.name}</h5>
              <p className="ml-2 m-0">
                {playlist.public ? "Public" : "Private"}
              </p>
            </div>
          </Col>

          <Col
            xs={12}
            sm={6}
            className={isBelowExtraSmallBreakpoint() ? "p-0" : ""}
          >
            {isBelowExtraSmallBreakpoint() && (
              <div className="mobile-playlist-card-button-wrapper">
                <Button
                  variant="primary"
                  className=""
                  onClick={this.selectPlaylist}
                >
                  Edit
                </Button>
                <Button
                  variant="outline-danger"
                  onClick={this.unfollowPlaylist}
                >
                  Unfollow
                </Button>
              </div>
            )}

            {!isBelowExtraSmallBreakpoint() && (
              <div className="desktop-playlist-card-button-wrapper">
                <Button
                  variant="outline-danger"
                  className="m-1"
                  onClick={this.unfollowPlaylist}
                >
                  Unfollow
                </Button>
                <Button
                  variant="primary"
                  className="m-1"
                  onClick={this.selectPlaylist}
                >
                  Edit
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Col>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateSelectedPlaylist: (playlistId, spotifyApi) =>
      dispatch(setSelectedPlaylist(playlistId, spotifyApi))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PlaylistCard);
