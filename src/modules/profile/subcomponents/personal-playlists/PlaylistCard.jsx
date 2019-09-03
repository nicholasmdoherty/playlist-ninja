import React, { Component } from "react";
import { Col, Image, Button } from "react-bootstrap";
import "./playlists.css";

export default class PlaylistCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { playlist } = this.props;

    return (
      <Col xs={12} sm={6} lg={4} className="playlist-card-col">
        <div className="playlist-card content-card text-left p-2">
          <div className="playlist-card-content text-center">
            <Image
              src={playlist.images[0].url}
              fluid
              className="playlist-card-image"
            />
            <hr />
            <div className="text-left">
              <h5>{playlist.name}</h5>
              <p className="lead">{playlist.public ? "Public" : "Private"}</p>
            </div>
          </div>

          <div className="w-100 d-flex playlist-card-button-wrapper">
            <Button variant="outline-danger">Unfollow</Button>
            <Button variant="primary">Edit</Button>
          </div>
        </div>
      </Col>
    );
  }
}
