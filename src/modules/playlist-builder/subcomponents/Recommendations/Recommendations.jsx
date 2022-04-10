import React, { Component, useCallback, useState } from "react";
import TrackTable from "../Tracklist/TrackTable";
import { connect } from "react-redux";
import autoBind from "react-autobind";
import Slider from "rc-slider";
import { setSelectedPlaylist } from "../../../../redux/actions/playlistActions";
import FeatherIcon from 'feather-icons-react'

import './Recommendations.css'
import SelectModal from "../../../../common/components/SelectModal/SelectModal";



const Recommendations = ({ api, playlistId, setSelectedPlaylist, playlistTracks }) => {

  const [activeView, setActiveView] = useState('input')
  const [modalOpen, setModalOpen] = useState(false)
  const [activeModal, setActiveModal] = useState('artists')
  const [recommendedTracks, setRecommendedTracks] = useState([])

  const [selectedArtistSeeds, setSelectedArtistSeeds] = useState([])
  const [selectedTrackSeeds, setSelectedTrackSeeds] = useState([])
  const [targetValence, setTargetValence] = useState(null)
  const [targetEnergy, setTargetEnergy] = useState(null)
  const [targetDanceability, setTargetDanceability] = useState(null)
  const [targetBPM, setTargetBPM] = useState(null)
  const [targetPopularity, setTargetPopularity] = useState(null)
  
  const [error, setError] = useState(null)

  /**
   * A method to update the selected playlist. It calls the redux 
   * action to load a selected playlist with this playlist's id.
   */
  const updateSelectedPlaylist = useCallback(() => {
    setSelectedPlaylist(playlistId, api);
  }, [setSelectedPlaylist, playlistId, api])

  /**
   * Updates the recommendations for the playlist with the currently
   * selected values and seeds and updates the table.
   *
   * @returns void
   */
  const updateRecommendations = useCallback(() => {
    let query = {
      limit: 15,
      seed_artists: selectedArtistSeeds.map((selection) => selection.value),
      seed_tracks: selectedTrackSeeds.map((selection) => selection.value)
    }

    if (targetBPM) query["target_bpm"] = targetBPM
    if (targetValence) query["target_valence"] = targetValence
    if (targetEnergy) query["target_energy"] = targetEnergy
    if (targetDanceability) query["target_danceability"] = targetDanceability
    if (targetPopularity) query["target_popularity"] = targetPopularity

    api.getRecommendations(query).then(
      (data) => {
        setRecommendedTracks(data.body.tracks)
        setError(null)
        setActiveView('songs')
      },
      (error) => {
        setError(error.message)
        setActiveView('songs')
      }
    );
  }, [api, selectedArtistSeeds, selectedTrackSeeds, targetBPM, targetDanceability, targetEnergy, targetPopularity, targetValence])

  /**
   * Determines whether or not we should generate recommendations.
   * Checks that there is at least one seed selected, if not it sets an
   * error in the state.
   *
   * @returns void
   */
  const handleRecommendationGeneration = useCallback(() => {
    let atLeastOneSeedSelected = false;

    if (selectedArtistSeeds.length + selectedTrackSeeds.length > 0) {
      atLeastOneSeedSelected = true
    }

    if (atLeastOneSeedSelected) {
      updateRecommendations();
    } else {
      setError('You must choose at least one similar artist or track for recommendations')
    }
  }, [selectedArtistSeeds.length, selectedTrackSeeds.length, updateRecommendations])

  /**
   * Method to see if all the seeds for recommendations are filled since
   * Spotify only allows 5 seeds of any type.
   *
   * @returns a boolean representing whether or not we have the max amounts of seeds.
   */
  const numberOfSeedsFull = useCallback(() => {
    return selectedArtistSeeds.length + selectedTrackSeeds.length >= 5
  }, [selectedArtistSeeds.length, selectedTrackSeeds.length])

  const renderSeedArtistSelection = useCallback(() => {
    return (
      <div className="seed-selection-container">
        <span className="input-label">Similar Artists (up to 3)</span>
        <div className="seed-selection-row">
          {selectedArtistSeeds.map((selectedSeed, index) => {
            return (
              <div className="selected-seed">
                {selectedSeed.displayName}
                <FeatherIcon 
                  className="selected-seed-remove" 
                  icon={"x"} 
                  width={16} 
                  height={16}
                  onClick={() => { setSelectedArtistSeeds(selectedArtistSeeds.filter((_, i) => i !== index)) }}
                />
              </div>
            )
          })}
          {!numberOfSeedsFull() && 
            <div 
              className="seed-selection-button"
              onClick={() => {
                setActiveModal('artists')
                setModalOpen('true')
              }}
            >
              <FeatherIcon icon={"plus"} width={16} height={16} />
            </div>
          }
        </div>
      </div>
    )
  }, [numberOfSeedsFull, selectedArtistSeeds])


  const renderSeedTracksDropdown = useCallback(() => {
    return (
      <div className="seed-selection-container">
        <span className="input-label">Similar Tracks (up to 3)</span>
        <div className="seed-selection-row">
          {selectedTrackSeeds.map((selectedSeed, index) => {
            return (
              <div className="selected-seed">
                {selectedSeed.displayName}
                <FeatherIcon 
                  className="selected-seed-remove" 
                  icon={"x"} 
                  width={16} 
                  height={16}
                  onClick={() => { setSelectedTrackSeeds(selectedTrackSeeds.filter((_, i) => i !== index)) }}
                />
              </div>
            )
          })}
          {!numberOfSeedsFull() && 
            <div 
              className="seed-selection-button"
              onClick={() => {
                setActiveModal('tracks')
                setModalOpen('true')
              }}
            >
              <FeatherIcon icon={"plus"} width={16} height={16} />
            </div>
          }
        </div>
      </div>
    )
  }, [numberOfSeedsFull, selectedTrackSeeds])

  const renderAudioFeatureSliders = useCallback(() => {
    return (
      <div className="audio-feature-input">
        <div className='input-container'>
          <span className="input-label">Target Danceability</span>
          <Slider
            min={0}
            max={100}
            step={1}
            defaultValue={50}
            value={targetDanceability ? targetDanceability * 100 : 0}
            onChange={(value) => value ? setTargetDanceability(value / 100) : setTargetDanceability(null) }
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
            value={targetEnergy ? targetEnergy * 100 : 0}
            onChange={(value) => value ? setTargetEnergy(value / 100) : setTargetEnergy(null)}
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
            value={targetValence ? targetValence * 100 : 0}
            onChange={(value) => value ? setTargetValence(value / 100) : setTargetValence(null)}
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
            value={targetBPM ? targetBPM : 0}
            onChange={(value) => value ? setTargetBPM(value) : setTargetBPM(null)}
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
            value={targetPopularity ? targetPopularity : 0}
            onChange={(value) => value ? setTargetPopularity(value) : setTargetEnergy(null)}
            className="audio-slider"
          />
        </div>
      </div>
    );
  }, [targetBPM, targetDanceability, targetEnergy, targetPopularity, targetValence])


  const getTrackSeedSelectionList = useCallback(() => {
    let tracks = [];

    playlistTracks.forEach((playlistTrack) => {
      let track = playlistTrack.track;

      tracks.push({displayName: track.name, value: track.id})
    });

    return tracks
  }, [playlistTracks])

  const getArtistSeedSelectionList = useCallback(() => {
    let artists = [];

    playlistTracks.forEach((playlistTrack) => {
      playlistTrack.track.artists.forEach((artist) => {
        artists.push({displayName: artist.name, value: artist.id})
      });
    });

    return artists
  }, [playlistTracks])


  // Rendering the whole component
  return (
    <div className="recommendations-container">
      <span className="recommendations-header">Generate Recommendations</span>
      <div className="recommendations-tab-row">
        <div 
          className={`recommendations-tab ${activeView === 'input' ? 'active' : ''}`}
          onClick={() => setActiveView('input')}
        >
          Recommendations Input
        </div>
        <div 
          className={`recommendations-tab ${activeView === 'songs' ? 'active' : ''}`}
          onClick={() => setActiveView('songs')}
        >
          Recommended Songs
        </div>
      </div>
      {activeView === 'input' && (
        <div className="recommendations-main-card card-style">
          {renderSeedTracksDropdown()}
          {renderSeedArtistSelection()}
          {renderAudioFeatureSliders()}
          <div className="recommendations-button" onClick={handleRecommendationGeneration}>
            Generate Recommendations
          </div>
          {error && (
            <div className="text-center">
              <h5 className="lead text-danger">
                <i className="fa fa-exclamation-triangle"></i> {error}
              </h5>
            </div>
          )}
        </div>
      )}
      {activeView === 'songs' && (
        <div className="card-style">
          {recommendedTracks.length === 0 && (
            <div className="recommendations-main-card card-style text-center">
              <span>Looks like you haven't generated any recommendations yet.</span>
            </div>
          )}
          {!error && recommendedTracks.length > 0 && (
              <TrackTable
                playlistId={playlistId}
                tracks={recommendedTracks}
                updateCallback={updateSelectedPlaylist}
              />
          )}
        </div>
      )}
      { 
        modalOpen && 
        activeModal === "artists" && <SelectModal 
                                        title="Add Similar Artist" 
                                        selectionList={getArtistSeedSelectionList()}
                                        buttonText="Select Artist"
                                        returnSelection={(selection) => { 
                                          setSelectedArtistSeeds(selectedArtistSeeds.concat([selection])) 
                                          setModalOpen(false)
                                        }}
                                        closeModal={() => setModalOpen(false)}
                                      />
      }
      { 
        modalOpen && 
        activeModal === "tracks" && <SelectModal 
                                      title="Add Similar Track" 
                                      selectionList={getTrackSeedSelectionList()}
                                      buttonText="Select Track"
                                      returnSelection={(selection) => { 
                                        setSelectedTrackSeeds(selectedTrackSeeds.concat([selection])) 
                                        setModalOpen(false)
                                      }}
                                      closeModal={() => setModalOpen(false) }
                                    />
      }
    </div>
  );

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
