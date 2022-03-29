import React, { Component } from "react";
import TrackTable from "../Tracklist/TrackTable";
import { connect } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import autoBind from "react-autobind";
import Slider from "rc-slider";
import { setSelectedPlaylist } from "../../../../redux/actions/playlistActions";
import FeatherIcon from 'feather-icons-react'

import './Recommendations.css'

class Recommendations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeView: "input",
      recommendedTracks: [],
      selectedArtistSeeds: {
        0: "",
        1: "",
        2: "",
      },
      selectedTrackSeeds: {
        0: "",
        1: "",
        2: "",
      },
      targetValence: 0.5,
      targetEnergy: 0.5,
      targetDanceability: 0.5,
      targetBPM: 100,
      targetPopularity: 50,
      error: null,
    };

    autoBind(this);

    window.addEventListener("resize", () => {
      this.forceUpdate();
    });
  }

  componentDidMount() {
    this.handleRecommendationGeneration();
  }

  /**
   * A method to update the selected playlist. It calls the redux action to load a selected playlist with this playlist's id.
   */
  updateSelectedPlaylist() {
    let { api, playlistId, setSelectedPlaylist } = this.props;
    setSelectedPlaylist(playlistId, api);
  }

  /**
   * Determines whether or not we should generate recommendations.
   * Checks that there is at least one seed selected, if not it sets an
   * error in the state.
   *
   * @returns void
   */
  handleRecommendationGeneration() {
    let { selectedArtistSeeds, selectedTrackSeeds } = this.state;

    let atLeastOneSeedSelected = false;

    Object.keys(selectedArtistSeeds).forEach((index) => {
      if (selectedArtistSeeds[index] !== "") {
        atLeastOneSeedSelected = true;
      }
    });

    if (!atLeastOneSeedSelected) {
      Object.keys(selectedTrackSeeds).forEach((index) => {
        if (selectedTrackSeeds[index] !== "") {
          atLeastOneSeedSelected = true;
        }
      });
    }

    if (atLeastOneSeedSelected) {
      this.updateRecommendations();
    } else {
      this.setState({
        error: "You must choose at least one seed for recommendations.",
      });
    }
  }

  /**
   * Updates the recommendations for the playlist with the currently
   * selected values and seeds and updates the table.
   *
   * @returns void
   */
  updateRecommendations() {
    let { api } = this.props;
    let {
      selectedArtistSeeds,
      selectedTrackSeeds,
      targetValence,
      targetEnergy,
      targetDanceability,
      targetBPM,
      targetPopularity,
    } = this.state;

    let seedArtistIds = [];
    Object.keys(selectedArtistSeeds).forEach((seedIndex) => {
      if (selectedArtistSeeds[seedIndex] !== "") {
        seedArtistIds.push(selectedArtistSeeds[seedIndex]);
      }
    });

    let seedTrackIds = [];
    Object.keys(selectedTrackSeeds).forEach((seedIndex) => {
      if (selectedTrackSeeds[seedIndex] !== "") {
        seedTrackIds.push(selectedTrackSeeds[seedIndex]);
      }
    });

    let query = {
      limit: 15,
      target_bpm: targetBPM,
      target_valence: targetValence,
      target_energy: targetEnergy,
      target_danceability: targetDanceability,
      target_popularity: targetPopularity,
      seed_artists: seedArtistIds,
      seed_tracks: seedTrackIds,
    };

    api.getRecommendations(query).then(
      (data) => {
        this.setState({ recommendedTracks: data.body.tracks, error: null, activeView: 'songs' });
      },
      (error) => {
        this.setState({ error: error.message, activeView: 'songs' });
      }
    );
  }

  /**
   * Method to see if all the seeds for recommendations are filled since
   * Spotify only allows 5 seeds of any type.
   *
   * @returns a boolean representing whether or not we have the max amounts of seeds.
   */
  numberOfSeedsFull() {
    let { selectedArtistSeeds, selectedTrackSeeds } = this.state;

    let artistSeeds = [];
    let trackSeeds = [];

    [0, 1, 2].forEach((seedIndex) => {
      if (selectedArtistSeeds[seedIndex] !== "") {
        artistSeeds.push(selectedArtistSeeds[seedIndex]);
      }

      if (selectedTrackSeeds[seedIndex] !== "") {
        trackSeeds.push(selectedTrackSeeds[seedIndex]);
      }
    });

    return artistSeeds.length + trackSeeds.length >= 5;
  }

  /**
   * Returns an event handler that sets the seed track with the given
   * index to the value of the event's target.
   *
   * @param {number} index The index of the seed artist to change.
   */
  handleAddSeedArtist(index) {
    return (event) => {
      this.setState({
        selectedArtistSeeds: {
          ...this.state.selectedArtistSeeds,
          [index]: event.target.value,
        },
      });
    };
  }

  /**
   * Renders the dropdown menus for selecting seed artists.
   *
   * @returns JSX.Element
   */
  renderSeedArtistsDropdown() {
    let { playlistTracks } = this.props;

    let artists = {};

    playlistTracks.forEach((playlistTrack) => {
      playlistTrack.track.artists.forEach((artist) => {
        artists[artist.id] = artist.name;
      });
    });

    let artistIdArray = Object.keys(artists);

    return (
      <div className="input-container">
        <span className="input-label">Similar Artists (up to 3)</span>

        <div className='dropdowns-container'>
          {[1, 2, 3].map((seedNumber) => {
            let { selectedArtistSeeds } = this.state;

            return (
              <div className="dropdown-container">
                <select
                  key={seedNumber - 1}
                  as="select"
                  onChange={this.handleAddSeedArtist(seedNumber - 1)}
                  disabled={
                    selectedArtistSeeds[seedNumber - 1] === "" &&
                    this.numberOfSeedsFull()
                  }
                  className="similar-dropdown"
                >
                  <option value="">None</option>
                  {artistIdArray.map((artistId) => {
                    return (
                      <option value={artistId}>{artists[artistId]}</option>
                    );
                  })}
                </select>
                <FeatherIcon className='dropdown-arrow' icon="chevron-down" width={16} height={16} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  /**
   * Returns an event handler that sets the seed track with the given
   * index to the value of the event's target.
   *
   * @param {number} index The index of the seed track to change.
   */
  handleAddSeedTrack(index) {
    return (event) => {
      this.setState({
        selectedTrackSeeds: {
          ...this.state.selectedTrackSeeds,
          [index]: event.target.value,
        },
      });
    };
  }

  /**
   * Renders the dropdown menus for selecting seed tracks.
   *
   * @returns JSX.Element
   */
  renderSeedTracksDropdown() {
    let { playlistTracks } = this.props;

    let tracks = {};

    playlistTracks.forEach((playlistTrack) => {
      let track = playlistTrack.track;

      tracks[track.id] = track.name;
    });

    let trackIdArray = Object.keys(tracks);

    return (
      <div className="input-container">
        <span className="input-label">Similar Artists (up to 3)</span>
        <div className="dropdowns-container">
          {[1, 2, 3].map((seedNumber) => {
            let { selectedTrackSeeds } = this.state;

            return (
              <div className="dropdown-container">
                <select
                  key={seedNumber - 1}
                  as="select"
                  onChange={this.handleAddSeedTrack(seedNumber - 1)}
                  disabled={
                    selectedTrackSeeds[seedNumber - 1] === "" &&
                    this.numberOfSeedsFull()
                  }
                  className="similar-dropdown"
                >
                  <option value="">None</option>
                  {trackIdArray.map((trackId) => {
                    return (
                      <option value={trackId}>{tracks[trackId]}</option>
                    );
                  })}
                </select>
                <FeatherIcon className='dropdown-arrow' icon="chevron-down" width={16} height={16} />
              </div>
            );
          })}
        </div>
     </div>
    );
  }

  /**
   * Renders the sliders for selecting target audio features for the
   * recommended tracks.
   *
   * @returns JSX.Element
   */
  renderAudioFeatureSliders() {
    return (
      <div className="audio-feature-input">
        <div className='input-container'>
          <span className="input-label">Target Danceability</span>
          <Slider
            min={0}
            max={100}
            step={1}
            defaultValue={50}
            value={this.state.targetDanceability * 100}
            onChange={(value) =>
              this.setState({ targetDanceability: value / 100 })
            }
            className="audio-slider"
          />
        </div>
        <div className='input-container'>
          <span className="input-label">Target Energy</span>
          <Slider
            min={0}
            max={100}
            step={1}
            defaultValue={50}
            value={this.state.targetEnergy * 100}
            onChange={(value) => this.setState({ targetEnergy: value / 100 })}
            className="audio-slider"
          />
        </div>

        <div className='input-container'>
          <span className="input-label">Target Valence</span>
          <Slider
            min={0}
            max={100}
            step={1}
            defaultValue={50}
            value={this.state.targetValence * 100}
            onChange={(value) => this.setState({ targetValence: value / 100 })}
            className="audio-slider"
          />
        </div>

        <div className='input-container'>
          <span className="input-label">Target Tempo</span>
          <Slider
            min={0}
            max={250}
            step={1}
            defaultValue={100}
            value={this.state.targetBPM}
            onChange={(value) => this.setState({ targetBPM: value })}
            className="audio-slider"
          />
        </div>

        <div className='input-container'>
          <span className="input-label">Target Popularity</span>
          <Slider
            min={0}
            max={100}
            step={1}
            defaultValue={100}
            value={this.state.targetPopularity}
            onChange={(value) => this.setState({ targetPopularity: value })}
            className="audio-slider"
          />
        </div>
      </div>
    );
  }

  render() {
    let { error } = this.state;

    return (
      <div className="recommendations-container">
        <span className="recommendations-header">Generate Recommendations</span>
        <div className="recommendations-tab-row">
          <div 
            className={`recommendations-tab ${this.state.activeView === 'input' ? 'active' : ''}`}
            onClick={() => {this.setState({ activeView: 'input' })}}
          >
            Recommendations Input
          </div>
          <div 
            className={`recommendations-tab ${this.state.activeView === 'songs' ? 'active' : ''}`}
            onClick={() => {this.setState({ activeView: 'songs' })}}
          >
            Recommended Songs
          </div>
        </div>
        {this.state.activeView === 'input' && (
          <div className="recommendations-main-card card-style">
            {this.renderSeedTracksDropdown()}
            {this.renderSeedArtistsDropdown()}
            {this.renderAudioFeatureSliders()}
            <div className="recommendations-button" onClick={this.handleRecommendationGeneration}>
              Generate Recommendations
            </div>
          </div>
        )}
        {this.state.activeView === 'songs' && (
          <div className="card-style">
            {error && (
              <div className="text-center mt-2">
                <h5 className="p-3 lead text-danger">
                  <i className="fa fa-exclamation-triangle"></i> {error}
                </h5>
              </div>
            )}
            {!error && (
                <TrackTable
                  playlistId={this.props.playlistId}
                  tracks={this.state.recommendedTracks}
                  updateCallback={this.updateSelectedPlaylist}
                />
            )}
          </div>
        )}
      </div>
    );
  }
}

/**
 * Maps the spotify api to the props of the recommendations component so that
 * we can use it to find recommendations.
 *
 * @param {*} state The incoming redux state
 */
const mapStateToProps = (state) => {
  return {
    api: state.api.spotifyApi,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedPlaylist: (playlistId, spotifyApi) =>
      dispatch(setSelectedPlaylist(playlistId, spotifyApi)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommendations);
