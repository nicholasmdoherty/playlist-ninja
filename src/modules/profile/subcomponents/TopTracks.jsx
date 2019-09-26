import React, { Component } from "react";
import { Image, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { deepCamelCaseKeys } from "../../../common/constants";
import Spacer from "../../../common/components/Spacer";

class TopTracks extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      topTracks: null,
      error: null
    };
  }

  componentDidMount() {
    this._isMounted = true;

    this.props.api.getMyTopTracks({ limit: 12 }).then(
      data => {
        if (this._isMounted) {
          this.setState({ topTracks: data.body });
        }
      },
      error => {
        if (this._isMounted) {
          this.setState({ error: deepCamelCaseKeys(error) });
        }
      }
    );

    this.forceUpdate();
  }

  /**
   * Sets _isMounted to false so not to call setState on an unmounted component.
   */
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <Row className="p-3">
        <Col xs={12} className="text-center">
          <h3 className="display-5"> Top Tracks </h3>
          <Spacer percentage={4} />
        </Col>

        {this.state.topTracks &&
          this.state.topTracks.items.map(topTrack => {
            return (
              <Col xs={6} sm={4} lg={2} className="text-center">
                <div className="p-2 break-long-words">
                  <Image
                    src={topTrack.album.images[0].url}
                    fluid
                    className="drop-shadow mb-3"
                  />
                  <p className="lead">{topTrack.name}</p>
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
    api: state.api.spotifyApi
  };
};

export default connect(mapStateToProps)(TopTracks);
