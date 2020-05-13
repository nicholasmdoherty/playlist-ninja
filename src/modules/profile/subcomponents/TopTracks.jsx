import React, { Component } from "react";
import { Image, Col, Row, Tabs, Tab } from "react-bootstrap";
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

    this.props.api.getMyTopTracks({ limit: 12, time_range: 'short_term' }).then(
      data => {
        if (this._isMounted) {
          this.setState({ topShortTermTracks: data.body });
        }
      },
      error => {
        if (this._isMounted) {
          this.setState({ error: deepCamelCaseKeys(error) });
        }
      }
    );

    this.props.api.getMyTopTracks({ limit: 12, time_range: 'medium_term' }).then(
      data => {
        if (this._isMounted) {
          this.setState({ topMediumTermTracks: data.body });
        }
      },
      error => {
        if (this._isMounted) {
          this.setState({ error: deepCamelCaseKeys(error) });
        }
      }
    );

    this.props.api.getMyTopTracks({ limit: 12, time_range: 'long_term' }).then(
      data => {
        if (this._isMounted) {
          this.setState({ topLongTermTracks: data.body });
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

        <Col xs={12} className="text-center justify-content-center">
          <Tabs defaultActiveKey="shortTerm" id="nav-tabs">
            <Tab eventKey="shortTerm" title="Short Term">
              <Row className="pt-4">
                {this.state.topShortTermTracks &&
                  this.state.topShortTermTracks.items.map(topTrack => {
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
            </Tab>
            <Tab eventKey="mediumTerm" title="Medium Term">
              <Row className="pt-4">
                {this.state.topMediumTermTracks &&
                  this.state.topMediumTermTracks.items.map(topTrack => {
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
            </Tab>
            <Tab eventKey="longTerm" title="Long Term">
              <Row className="pt-4">
                {this.state.topLongTermTracks &&
                  this.state.topLongTermTracks.items.map(topTrack => {
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
            </Tab>
          </Tabs>
        </Col>

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
