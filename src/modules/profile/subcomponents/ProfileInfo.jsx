import React, { Component } from "react";
import { Image, Col, Row } from "react-bootstrap";
import {
  deepCamelCaseKeys,
  isBelowMediumBreakpoint,
  isBelowSmallBreakpoint
} from "../../../common/constants";

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
          <Col xs={12} className="text-center">
            <Image
              src={images[0].url}
              roundedCircle
              fluid
              className={
                isBelowSmallBreakpoint() ? "h-75 drop-shadow" : "drop-shadow"
              }
            />
          </Col>
          <Col
            className="text-center fill-available-width profile-text-wrapper"
            xs={12}
          >
            <h1 className="display-4">{displayName}</h1>
            <h5 className="lead">{email}</h5>
            <h2 className="lead">{followers.total} followers</h2>
          </Col>
        </Row>
      );
    } else {
      return null;
    }
  }
}

export default ProfileInfo;
