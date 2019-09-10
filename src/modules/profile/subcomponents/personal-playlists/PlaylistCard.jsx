import React, { Component } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import autoBind from "react-autobind";
import { connect } from "react-redux";
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
              src={playlist.images[0].url}
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
                <Button variant="outline-danger" className="m-1">
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

export default connect()(PlaylistCard);
