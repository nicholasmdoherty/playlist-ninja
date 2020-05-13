import React, { Component } from "react";
import { Image, Col, Row, Tabs, Tab } from "react-bootstrap";
import { connect } from "react-redux";
import { deepCamelCaseKeys } from "../../../common/constants";
import Spacer from "../../../common/components/Spacer";
import "./top-artists-and-tracks.css";

class TopArtists extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      topArtists: null,
      error: null
    };
  }

  /**
   * Sets _isMounted to true and loads top artist data.
   */
  componentDidMount() {
    this._isMounted = true;

    this.props.api.getMyTopArtists({ limit: 6, time_range: 'short_term' }).then(
      data => {
        // Only call setState in async functions if mounted
        if (this._isMounted) {
          this.setState({ topShortTermArtists: data.body });
        }
      },
      error => {
        if (this._isMounted) {
          this.setState({ error: deepCamelCaseKeys(error) });
        }
      }
    );

    this.props.api.getMyTopArtists({ limit: 6, time_range: 'medium_term' }).then(
      data => {
        // Only call setState in async functions if mounted
        if (this._isMounted) {
          this.setState({ topMediumTermArtists: data.body });
        }
      },
      error => {
        if (this._isMounted) {
          this.setState({ error: deepCamelCaseKeys(error) });
        }
      }
    );

    this.props.api.getMyTopArtists({ limit: 6, time_range: 'long_term' }).then(
      data => {
        // Only call setState in async functions if mounted
        if (this._isMounted) {
          this.setState({ topLongTermArtists: data.body });
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
   * Sets _isMounted to false so that we don't call setState accidentally in an async function.
   */
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <Row className="p-3">
        <Col xs={12} className="text-center">
          <h3 className="display-5"> Top Artists </h3>
          <Spacer percentage={4} />
        </Col>

        <Col xs={12} className="text-center justify-content-center">
          <Tabs defaultActiveKey="shortTerm" id="nav-tabs">
            <Tab eventKey="shortTerm" title="Short Term">
              <Row className="pt-4">
                {this.state.topShortTermArtists &&
                  this.state.topShortTermArtists.items.map(topArtist => {
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
            </Tab>
            <Tab eventKey="mediumTerm" title="Medium Term">
              <Row className="pt-4">
                {this.state.topMediumTermArtists &&
                  this.state.topMediumTermArtists.items.map(topArtist => {
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
            </Tab>
            <Tab eventKey="longTerm" title="Long Term">
              <Row className="pt-4">
                {this.state.topLongTermArtists &&
                  this.state.topLongTermArtists.items.map(topArtist => {
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

export default connect(mapStateToProps)(TopArtists);
