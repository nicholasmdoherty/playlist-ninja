import React, { Component } from "react";
import { Col, Image, Button } from "react-bootstrap";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import "./playlists.css";
import { setSelectedPlaylist } from "../../../../redux/actions/playlistActions";

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

  render() {
    let { playlist } = this.props;

    return (
      <Col xs={12} sm={12} lg={12} className="playlist-card-col">
        <div className="playlist-card content-card text-left p-2">
          <div className="playlist-card-content text-center d-flex">
            <Image
              src={playlist.images[0].url}
              fluid
              className="playlist-card-image"
            />
            <div className="text-left">
              <h5 className="m-1 ml-2">{playlist.name}</h5>
              <p className="ml-2 m-0">
                {playlist.public ? "Public" : "Private"}
              </p>
            </div>
          </div>

          <div className="d-flex playlist-card-button-wrapper">
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
        </div>
      </Col>
    );
  }
}

export default connect()(PlaylistCard);
