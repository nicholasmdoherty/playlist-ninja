import React, { Component } from "react";
import { Image, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { deepCamelCaseKeys } from "../../../common/constants";
import Spacer from "../../../common/components/Spacer";

class TopArtists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topArtists: null,
      error: null
    };
  }

  componentDidMount() {
    this.props.api.spotifyApi.getMyTopArtists({ limit: 6 }).then(
      data => {
        this.setState({ topArtists: data.body });
      },
      error => {
        this.setState({ error: deepCamelCaseKeys(error) });
      }
    );

    this.forceUpdate();
  }

  render() {
    return (
      <Row className="p-3">
        <Col xs={12} className="text-center">
          <h3 className="display-5"> Top Artists </h3>
          <Spacer percentage={4} />
        </Col>

        {this.state.topArtists &&
          this.state.topArtists.items.map(topArtist => {
            return (
              <Col xs={6} sm={4} lg={2} className="text-center">
                <div className="p-2 break-long-words">
                  <Image
                    src={topArtist.images[0].url}
                    roundedCircle
                    fluid
                    className="drop-shadow mb-3"
                  />
                  <p className="lead">{topArtist.name}</p>
                </div>
              </Col>
            );
          })}
      </Row>
    );
  }
}

let mapStateToProps = state => {
  return {
    api: state.api
  };
};

export default connect(mapStateToProps)(TopArtists);
