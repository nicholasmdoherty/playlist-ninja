import React, { Component } from "react";
import "./profile.css";
import MyPlaylists from "./subcomponents/personal-playlists/PersonalPlaylists";
import TopArtists from "./subcomponents/TopArtists/TopArtists";
import TopTracks from "./subcomponents/TopTracks/TopTracks";
import { connect } from "react-redux";
import { deepCamelCaseKeys } from "../../common/constants";
import { Col, Row } from "react-bootstrap";
import { setUserId } from "../../redux/actions/apiActions";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: null,
      error: null
    };
  }

  componentDidMount() {
    this.props.api.spotifyApi.getMe().then(
      data => {
        this.setState({ profile: deepCamelCaseKeys(data.body) });
      },
      error => {
        this.setState({ error: deepCamelCaseKeys(error) });
      }
    );

    this.forceUpdate();
  }

  render() {
    let { profile } = this.state;

    if (profile) {
      return (
        <div className="profile-wrapper">
          <span className='profile-header'>My Profile</span>
          <Row>
            <Col xs={12} md={7}>
              <MyPlaylists title="My Playlists" userId={profile.id} />
            </Col>
            <Col xs={12} md={5} className="top-tracks-artists-col">
              <TopArtists />
              <TopTracks />
            </Col>
          </Row>
        </div>
      );
    } else {
      return null;
    }
  }
}

let mapStateToProps = state => {
  return {
    api: state.api
  };
};

export default connect(mapStateToProps)(Profile);
