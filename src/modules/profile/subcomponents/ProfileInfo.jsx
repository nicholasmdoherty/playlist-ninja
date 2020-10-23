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
          <Col xs={12} md={6} className="text-right text-center-md">
            <Image
              src={images[0] ? images[0].url : ""}
              className="drop-shadow profile-image"
            />
          </Col>
          <Col xs={12} md={6} className="break-long-words text-center-md">
            <Spacer percentage={5} />
            <h1 className="">
              <span style={{ fontWeight: 200, fontSize: ".8em" }}>
                Welcome,
              </span>
              &nbsp;
              <span className="arts-and-crafts-font">{displayName}</span>
            </h1>
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
