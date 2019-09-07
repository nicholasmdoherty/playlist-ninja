import React, { Component } from "react";
import "../playlist-builder.css";
import { Image, Col, Row } from "react-bootstrap";

export default class PlaylistInfo extends Component {
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
            className="playlist-title-desc-wrapper text-right word-wrap"
            xs={12}
            sm={6}
          >
            <h1 className="display-3">{playlist.name}</h1>
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
