import React, { Component } from "react";
import "../playlist-builder.css";
import { Image, Col, Row } from "react-bootstrap";
import { isBelowSmallBreakpoint } from "../../../common/constants";

export default class PlaylistInfo extends Component {
  componentDidMount() {
    window.addEventListener("resize", () => {
      this.forceUpdate();
    });
  }

  render() {
    let { playlist } = this.props;

    return (
      <div id="playlist-info-wrapper" className="p-2">
        <Row>
          <Col className="playlist-image-wrapper" xs={12} sm={6}>
            <Image
              src={playlist.images[0].url}
              className="playlist-info-image"
            />
          </Col>
          <Col
            className="playlist-title-desc-wrapper text-right word-wrap p-3"
            xs={12}
            sm={6}
          >
            <h2 className={!isBelowSmallBreakpoint() ? "display-4" : ""}>
              {playlist.name}
            </h2>
            <p>{playlist.description || "No description provided."}</p>
            <p>
              {playlist.followers.total}{" "}
              {playlist.followers.total == 1 ? "follower" : "followers"}
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}
