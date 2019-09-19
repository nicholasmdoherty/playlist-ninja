import React, { Component } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import autoBind from "react-autobind";
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
    this.props.dispatch(
      setSelectedPlaylist(this.props.playlist.id, this.props.api)
    );
  }

  /**
   *  Renders a confirmation alert to make sure that the user wants to unfollow their playlist.
   */

  unfollowConfirmation() {
    return new Promise(function(resolve, reject) {
      let confirmed = window.confirm(
        "Are you sure you want to unfollow? It will exist on the Spotify system still, but you will not see it in your library."
      );

      return confirmed ? resolve(true) : reject(false);
    });
  }

  /**
   *  Unfollows the playlist that this PlaylistCard represents.
   */
  unfollowPlaylist() {
    let { playlist, api, updatePlaylists } = this.props;

    this.unfollowConfirmation().then(
      () => {
        api.unfollowPlaylist(playlist.id).then(response => {
          alert("Success");
          updatePlaylists();
        });
      },
      () => {
        alert("Did not unfollow playlist.");
      }
    );
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
            <Image
              src={playlist.images[0] ? playlist.images[0].url : null}
              className={
                isBelowSmallBreakpoint()
                  ? "mobile-playlist-card-image"
                  : "desktop-playlist-card-image"
              }
            />
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
                <Button variant="outline-danger" className="">
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

export default PlaylistCard;
