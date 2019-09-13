import React, { Component } from "react";
import {
  deepCamelCaseKeys,
  msToHM,
  isBelowSmallBreakpoint
} from "../../../common/constants";
import { Row, Col, ProgressBar } from "react-bootstrap";

class PlaylistTrackStatistics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tempo: 0,
      loudness: 0,
      danceability: 0,
      valence: 0,
      energy: 0,
      durationMs: 0,
      popularity: 0
    };
  }

  componentDidMount() {
    this.calculateAverageStatistics();

    window.addEventListener("resize", () => {
      this.forceUpdate();
    });
  }

  async calculateAverageStatistics() {
    let { api, tracks } = this.props;

    let statistics = {
      tempo: null,
      danceability: null,
      valence: null,
      energy: null,
      durationMs: null,
      popularity: null
    };

    let trackIds = [];

    tracks.forEach(playlistTrack => {
      trackIds.push(playlistTrack.track.id);
      statistics.popularity =
        statistics.popularity + playlistTrack.track.popularity;
    });

    let haveToLoop = trackIds.length > 100;

    let trackStatistics = [];

    if (trackIds.length !== 0) {
      await api
        .getAudioFeaturesForTracks(trackIds.splice(0, 100))
        .then(data => {
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
            .then(data => {
              let response = deepCamelCaseKeys(data.body);
              trackStatistics = trackStatistics.concat(response.audioFeatures);
              numOfStatisticsReceived += response.audioFeatures.length;
            });

          if (numOfStatisticsReceived === tracks.length) {
            haveToLoop = false;
          }
        }
      }

      trackStatistics.forEach(trackStatistic => {
        statistics.tempo = statistics.tempo + trackStatistic.tempo;
        statistics.danceability =
          statistics.danceability + trackStatistic.danceability;
        statistics.valence = statistics.valence + trackStatistic.valence;
        statistics.energy = statistics.energy + trackStatistic.energy;
        statistics.durationMs =
          statistics.durationMs + trackStatistic.durationMs;
      });

      this.setState({
        tempo: statistics.tempo / tracks.length,
        danceability: statistics.danceability / tracks.length,
        valence: statistics.valence / tracks.length,
        energy: statistics.energy / tracks.length,
        durationMs: statistics.durationMs,
        popularity: statistics.popularity / tracks.length
      });
    }
  }

  render() {
    let {
      tempo,
      danceability,
      valence,
      energy,
      durationMs,
      popularity
    } = this.state;

    if (!(tempo && danceability && valence && energy && durationMs)) {
      return (
        <div className="m-1 mt-3">
          <Row className="p-2 justify-content-center">
            <Col xs={12} className="p-2 mb-2 text-center">
              No tracks in this playlist, so there are no statistics.
            </Col>
          </Row>
        </div>
      );
    }

    let duration = msToHM(Math.round(durationMs));

    return (
      <div className="m-1 mt-3">
        <Row className="p-2 justify-content-center">
          <Col xs={4} sm={4} className="p-2 mb-2 text-center">
            <p
              className={`mb-1 ${
                isBelowSmallBreakpoint() ? "mobile-small-font" : ""
              }`}
            >
              Energy:
            </p>
            <ProgressBar animated striped now={energy * 100} />
          </Col>
          <Col xs={4} sm={4} className="p-2 mb-2 text-center">
            <p
              className={`mb-1 ${
                isBelowSmallBreakpoint() ? "mobile-small-font" : ""
              }`}
            >
              Danceability:
            </p>
            <ProgressBar animated striped now={danceability * 100} />
          </Col>
          <Col xs={4} sm={4} className="p-2 mb-2 text-center">
            <p
              className={`mb-1 ${
                isBelowSmallBreakpoint() ? "mobile-small-font" : ""
              }`}
            >
              Valence:
            </p>
            <ProgressBar animated striped now={valence * 100} />
          </Col>
        </Row>
        <Row className="p-2 justify-content-center">
          <Col xs={4} sm={4} className="p-2 mb-2 text-center">
            <p
              className={`mb-1 ${
                isBelowSmallBreakpoint() ? "mobile-small-font" : ""
              }`}
            >
              Tempo: <br />
              {Math.round(tempo)}BPM
            </p>
          </Col>
          <Col xs={4} sm={4} className="p-2 mb-2 text-center">
            <p
              className={`mb-1 ${
                isBelowSmallBreakpoint() ? "mobile-small-font" : ""
              }`}
            >
              Duration: <br />
              {duration.hours > 0 ? duration.hours + "hrs" : ""}{" "}
              {duration.minutes > 0 ? duration.minutes + "mins" : ""}
            </p>
          </Col>
          <Col xs={4} sm={4} className="p-2 mb-2 text-center">
            <p
              className={`mb-1 ${
                isBelowSmallBreakpoint() ? "mobile-small-font" : ""
              }`}
            >
              Popularity: <br />
              {Math.round(popularity)}
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PlaylistTrackStatistics;
