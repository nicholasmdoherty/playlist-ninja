import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import PlaylistCard from "./PlaylistCard";
import Spacer from "../../../../common/components/Spacer";

class PersonalPlaylists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlists: null,
      error: null
    };
  }

  componentDidMount() {
    this.getPersonalPlaylistData();
  }

  getPersonalPlaylistData() {
    let { api, userId } = this.props;

    if (userId) {
      api.getUserPlaylists(userId, { limit: 24 }).then(
        data => {
          this.setState({ playlists: data.body });
        },
        error => {
          this.setState({ error: error });
        }
      );
    } else {
      this.setState({ error: "No user ID found, please reload" });
    }
  }

  render() {
    if (this.state.playlists) {
      let {
        playlists: { items }
      } = this.state;

      return (
        <div className="text-center">
          <h3 className="display-5"> My Playlists </h3>
          <Spacer percentage={3} />

          <Row>
            {items.map(playlist => {
              return <PlaylistCard playlist={playlist} api={this.props.api} />;
            })}
          </Row>
        </div>
      );
    } else {
      return null;
    }
  }
}

export const mapStateToProps = state => {
  return {
    api: state.api.spotifyApi
  };
};

export default connect(mapStateToProps)(PersonalPlaylists);
