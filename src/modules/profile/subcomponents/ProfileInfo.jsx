import React, { Component } from "react";
import { Image, Col, Row } from "react-bootstrap";
import {
  deepCamelCaseKeys,
  isBelowMediumBreakpoint,
  isBelowSmallBreakpoint
} from "../../../common/constants";
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
        profile: { displayName, email, id, images, externalUrls, followers }
      } = this.props;

      return (
        <Row>
          <Col xs={12} className="text-center word-wrap">
            <Image src={images[0].url} fluid className="drop-shadow" />
            <Spacer percentage={5} />
            <h1 className="display-4">{displayName}</h1>
            <h5 className="lead">{email}</h5>
            <h2 className="lead mb-0">{followers.total} followers</h2>
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
