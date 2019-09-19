import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import autoBind from "react-autobind";
import PlaylistCard from "./PlaylistCard";
import Spacer from "../../../../common/components/Spacer";
import { loadUsersEditablePlaylists } from "../../../../redux/actions/playlistActions";

class PersonalPlaylists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlists: null,
      error: null
    };

    autoBind(this);
  }

  componentDidMount() {
    this.getPersonalPlaylistData();
  }

  getPersonalPlaylistData() {
    let { userId, api } = this.props;

    if (userId) {
      this.props.loadEditablePlaylists(userId, api);
    } else {
      this.setState({ error: "No user ID found, please reload" });
    }
  }

  render() {
    if (this.props.playlists) {
      let { playlists } = this.props;

      return (
        <Row className="text-center m-3 pb-2">
          <Col xs={12}>
            <h3 className="display-5"> My Playlists </h3>
            <Spacer percentage={3} />
          </Col>

          {playlists.map(playlist => {
            return (
              <PlaylistCard
                playlist={playlist}
                api={this.props.api}
                updatePlaylists={this.getPersonalPlaylistData}
              />
            );
          })}
        </Row>
      );
    } else {
      return null;
    }
  }
}

export const mapStateToProps = state => {
  return {
    api: state.api.spotifyApi,
    playlists: state.playlist.editablePlaylists
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    loadEditablePlaylists: (userId, spotifyApi) =>
      dispatch(loadUsersEditablePlaylists(userId, spotifyApi))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalPlaylists);
