import React, { Component } from "react";
import { Image, Col, Row } from "react-bootstrap";
import Spacer from "../../../common/components/Spacer";
import SpotifyLogoutButton from "../../spotify-sign-in/SpotifyLogoutButton";

class ProfileInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { profile } = this.props;

    if (profile) {
      let {
        profile: { displayName, email, id, images, externalUrls, followers },
      } = this.props;

      return (
        <Row>
          <Col xs={12} md={12} className="break-long-words text-center-md">
            <h1 className="large-header-font m-0">Welcome, </h1>
            <h1 className="large-header-font">{displayName}</h1>
            <p className="paragraph-font m-0">{email}</p>
            <p className="paragraph-font mb-4">{followers.total} followers</p>
            <SpotifyLogoutButton />
          </Col>
        </Row>
      );
    } else {
      return null;
    }
  }
}

export default ProfileInfo;
