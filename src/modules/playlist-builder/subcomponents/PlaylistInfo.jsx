import React, { Component } from "react";
import "../playlist-builder.css";
import { Image, Col, Row, Button } from "react-bootstrap";
import autoBind from "react-autobind";
import {
  isBelowSmallBreakpoint,
  deepCamelCaseKeys,
} from "../../../common/constants";

export default class PlaylistInfo extends Component {
  componentDidMount() {
    window.addEventListener("resize", () => {
      this.forceUpdate();
    });

    autoBind(this);
  }

  render() {
    let { playlist } = this.props;

    return (
      <div id="playlist-info-wrapper" className="p-2">
        <Row>
          <Col className="playlist-image-wrapper" xs={12} sm={6}>
            {playlist.images[0] ? (
              <Image
                src={playlist.images[0].url}
                className="playlist-info-image"
              />
            ) : null}
          </Col>
          <Col
            className="playlist-title-desc-wrapper text-right break-long-words p-3"
            xs={12}
            sm={6}
          >
            <h2 className={!isBelowSmallBreakpoint() ? "display-4" : ""}>
              {playlist.name}
            </h2>
            <p>{playlist.description || "No description provided."}</p>
            <p>
              {playlist.followers.total}{" "}
              {playlist.followers.total == 1 ? "follower" : "followers"}
            </p>
            {/*            
              <Button onClick={this.generateHypeCurvePlaylist.bind(this)}>
                Generate Hype Curve Playlist
              </Button>
            */}
          </Col>
        </Row>
      </div>
    );
  }

  async generateHypeCurvePlaylist() {
    let { api, playlist } = this.props;

    let trackIds = [];

    playlist.tracks.forEach((playlistTrack) => {
      trackIds.push(playlistTrack.track.id);
    });

    let haveToLoop = trackIds.length > 100;
    let trackStatistics = [];

    if (trackIds.length !== 0) {
      await api
        .getAudioFeaturesForTracks(trackIds.splice(0, 100))
        .then((data) => {
          let response = deepCamelCaseKeys(data.body);

          if (response.audioFeatures) {
          }
          trackStatistics = trackStatistics.concat(response.audioFeatures);
        });

      if (haveToLoop) {
        let numOfStatisticsReceived = 100;

        while (haveToLoop) {
          await api
            .getAudioFeaturesForTracks(trackIds.splice(0, 100))
            .then((data) => {
              let response = deepCamelCaseKeys(data.body);
              trackStatistics = trackStatistics.concat(response.audioFeatures);
              numOfStatisticsReceived += response.audioFeatures.length;
            });

          if (numOfStatisticsReceived === trackIds.length) {
            haveToLoop = false;
          }
        }
      }

      var hypeScores = trackStatistics.map((trackStatistic) => {
        let {
          danceability,
          energy,
          valence,
          tempo,
          popularity,
          id,
        } = trackStatistic;
        return {
          trackUri: "spotify:track:" + id,
          score: danceability * energy * valence * tempo * popularity,
        };
      });

      // here we want to sort the hype scores, iterate through them and add every other element to two arrays.
      // then we reverse one of the arrays and add it to the end, and we have a hype curve.
      let sortedHypeScores = hypeScores.sort((a, b) => a.score - b.score);

      var ascendingScores = [];
      var descendingScores = [];

      sortedHypeScores.forEach((score, index) => {
        if (index % 2 == 0) {
          ascendingScores.push(score);
        } else {
          descendingScores.push(score);
        }
      });

      // Actually make descending scores descending
      descendingScores.reverse();

      let curvedScores = ascendingScores.concat(descendingScores);
      let userId = "";
      await api.getMe().then((response) => {
        userId = response.body.id;
      });

      var playlistId = "";
      await api
        .createPlaylist(userId, playlist.name + " - Hype Curve")
        .then((response) => {
          playlistId = response.body.id;
        });

      await api.addTracksToPlaylist(
        playlistId,
        curvedScores.map((score) => score.trackUri)
      );
    }
  }
}
