import React, { Component } from "react";
import { deepCamelCaseKeys } from "../../../common/constants";

class PlaylistTrackStatistics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tempo: 0,
      loudness: 0,
      danceability: 0,
      valence: 0,
      energy: 0,
      durationMs: 0
    };
  }

  componentDidMount() {
    this.calculateAverageStatistics();
  }

  async calculateAverageStatistics() {
    let { api, tracks } = this.props;

    let statistics = {
      tempo: null,
      loudness: null,
      danceability: null,
      valence: null,
      energy: null,
      durationMs: null
    };

    for (let i = 0; i < tracks.length; i++) {
      let { track } = tracks[i];

      await api.getAudioFeaturesForTrack(track.id).then(data => {
        let {
          tempo,
          loudness,
          danceability,
          valence,
          energy,
          durationMs
        } = deepCamelCaseKeys(data.body);

        statistics.tempo = statistics.tempo + tempo;
        statistics.loudness = statistics.loudness + loudness;
        statistics.danceability = statistics.danceability + danceability;
        statistics.valence = statistics.valence + valence;
        statistics.energy = statistics.energy + energy;
        statistics.durationMs = statistics.durationMs + durationMs;
      });
    }

    this.setState({
      tempo: statistics.tempo / tracks.length,
      loudness: statistics.loudness / tracks.length,
      danceability: statistics.danceability / tracks.length,
      valence: statistics.valence / tracks.length,
      energy: statistics.energy / tracks.length,
      durationMs: statistics.durationMs
    });
  }

  render() {
    let {
      tempo,
      loudness,
      danceability,
      valence,
      energy,
      durationMs
    } = this.state;

    if (
      !(tempo && loudness && danceability && valence && energy && durationMs)
    ) {
      return null;
    }

    return (
      <div>
        <h2>{tempo} BPM</h2>
        <h2>{loudness} DB</h2>
        <h2>{danceability} danceability</h2>
        <h2>{valence} valence</h2>
        <h2>{energy} energy</h2>
        <h2>{durationMs} ms</h2>
      </div>
    );
  }
}

export default PlaylistTrackStatistics;
