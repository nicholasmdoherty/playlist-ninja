import React, { Component } from "react";
import { connect } from "react-redux";

class PlaylistBuilder extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = state => {
  return {
    api: state.api ? state.api.spotifyApi : null
  };
};

export default connect(mapStateToProps)(PlaylistBuilder);
