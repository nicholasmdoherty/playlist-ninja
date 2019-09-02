import React, { Component } from "react";
import "./profile.css";
import Spacer from "../../common/components/Spacer";
import PersonalPlaylists from "./subcomponents/personal-playlists/PersonalPlaylists";
import ProfileInfo from "./subcomponents/ProfileInfo";
import TopArtists from "./subcomponents/TopArtists";
import TopTracks from "./subcomponents/TopTracks";
import { connect } from "react-redux";
import { deepCamelCaseKeys } from "../../common/constants";

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
          <ProfileInfo profile={profile} />
          <Spacer percentage={5} />
          <hr className="w-75" />
          <Spacer percentage={5} />
          <TopArtists />
          <Spacer percentage={5} />
          <hr className="w-75" />
          <Spacer percentage={5} />
          <TopTracks />
          <Spacer percentage={5} />
          <hr className="w-75" />
          <Spacer percentage={5} />
          <PersonalPlaylists userId={profile.id} />
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
